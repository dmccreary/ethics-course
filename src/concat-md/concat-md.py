#!/usr/bin/env python3
"""
Script to collect all markdown content from the ethics-course GitHub repository
and concatenate it into a single markdown file.
"""

import requests
import yaml
import re
from pathlib import Path
from typing import List, Dict, Any, Optional
import time


class MarkdownCollector:
    """Collects and concatenates markdown files from a GitHub repository."""
    
    def __init__(self, repo_owner: str, repo_name: str, branch: str = "main"):
        """
        Initialize the collector.
        
        Args:
            repo_owner: GitHub repository owner
            repo_name: Repository name
            branch: Branch to fetch from (default: main)
        """
        self.repo_owner = repo_owner
        self.repo_name = repo_name
        self.branch = branch
        self.base_url = f"https://raw.githubusercontent.com/{repo_owner}/{repo_name}/{branch}"
        self.collected_content = []
        self.processed_files = set()
        
    def fetch_file(self, path: str) -> Optional[str]:
        """
        Fetch a file from the repository.
        
        Args:
            path: Path to the file in the repository
            
        Returns:
            File content as string, or None if fetch failed
        """
        url = f"{self.base_url}/{path}"
        print(f"Fetching: {url}")
        
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                return response.text
            else:
                print(f"  Warning: Could not fetch {path} (status: {response.status_code})")
                return None
        except Exception as e:
            print(f"  Error fetching {path}: {e}")
            return None
    
    def parse_mkdocs_yaml(self, yaml_content: str) -> Dict[str, Any]:
        """
        Parse the mkdocs.yml file.
        
        Args:
            yaml_content: Content of mkdocs.yml
            
        Returns:
            Parsed YAML as dictionary
        """
        return yaml.safe_load(yaml_content)
    
    def extract_markdown_files(self, nav_item: Any, base_path: str = "docs/") -> List[str]:
        """
        Recursively extract markdown file paths from navigation structure.
        
        Args:
            nav_item: Navigation item from mkdocs.yml
            base_path: Base path for markdown files
            
        Returns:
            List of markdown file paths
        """
        files = []
        
        if isinstance(nav_item, list):
            for item in nav_item:
                files.extend(self.extract_markdown_files(item, base_path))
        elif isinstance(nav_item, dict):
            for key, value in nav_item.items():
                if isinstance(value, str):
                    # This is a direct file reference
                    if value.endswith('.md'):
                        full_path = f"{base_path}{value}" if not value.startswith('/') else value
                        files.append(full_path)
                else:
                    # This is a nested structure
                    files.extend(self.extract_markdown_files(value, base_path))
        elif isinstance(nav_item, str):
            if nav_item.endswith('.md'):
                full_path = f"{base_path}{nav_item}" if not nav_item.startswith('/') else nav_item
                files.append(full_path)
        
        return files
    
    def process_markdown_content(self, content: str, file_path: str) -> str:
        """
        Process markdown content for concatenation.
        
        Args:
            content: Markdown content
            file_path: Path to the file (for context)
            
        Returns:
            Processed markdown content
        """
        # Add file separator with path information
        separator = f"\n\n---\n\n<!-- Source: {file_path} -->\n\n"
        
        # Clean up any excessive blank lines
        content = re.sub(r'\n{3,}', '\n\n', content)
        
        return separator + content
    
    def collect_all_markdown(self) -> str:
        """
        Collect all markdown files from the repository.
        
        Returns:
            Concatenated markdown content
        """
        print(f"Collecting markdown from {self.repo_owner}/{self.repo_name}...")
        
        # Step 1: Fetch mkdocs.yml
        mkdocs_content = self.fetch_file("mkdocs.yml")
        if not mkdocs_content:
            print("Error: Could not fetch mkdocs.yml")
            return ""
        
        # Step 2: Parse mkdocs.yml
        config = self.parse_mkdocs_yaml(mkdocs_content)
        
        # Step 3: Extract navigation structure
        nav = config.get('nav', [])
        files = self.extract_markdown_files(nav)
        
        # Also check for any markdown files in the docs folder root
        # Add index.md if it exists and wasn't already included
        if 'docs/index.md' not in files:
            files.insert(0, 'docs/index.md')
        
        print(f"\nFound {len(files)} markdown files in navigation")
        
        # Step 4: Collect all markdown files
        all_content = []
        
        # Add header
        header = """# Complete Ethics Course Content
        
This document contains all markdown content from the ethics-course repository.
Generated from: https://github.com/dmccreary/ethics-course

---

"""
        all_content.append(header)
        
        # Fetch and process each file
        for file_path in files:
            if file_path in self.processed_files:
                continue
                
            content = self.fetch_file(file_path)
            if content:
                processed_content = self.process_markdown_content(content, file_path)
                all_content.append(processed_content)
                self.processed_files.add(file_path)
                time.sleep(0.1)  # Be nice to GitHub's servers
        
        # Step 5: Look for additional markdown files in common locations
        additional_paths = [
            "README.md",
            "docs/about.md",
            "docs/glossary.md",
            "docs/references.md"
        ]
        
        for path in additional_paths:
            if path not in self.processed_files:
                content = self.fetch_file(path)
                if content:
                    processed_content = self.process_markdown_content(content, path)
                    all_content.append(processed_content)
                    self.processed_files.add(path)
                    time.sleep(0.1)
        
        # Concatenate all content
        final_content = '\n'.join(all_content)
        
        print(f"\n✓ Collected {len(self.processed_files)} files")
        return final_content
    
    def save_to_file(self, content: str, output_path: str = "ethics_course_complete.md"):
        """
        Save the collected content to a file.
        
        Args:
            content: Markdown content to save
            output_path: Path for output file
        """
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Get file size
        file_size = Path(output_path).stat().st_size / 1024  # KB
        print(f"✓ Saved to {output_path} ({file_size:.1f} KB)")


def create_sample_mkdocs_yaml():
    """
    Create a sample mkdocs.yml based on the known structure.
    This is used when we can't fetch from GitHub.
    """
    sample_config = """
site_name: Ethics Course
site_description: A Data-Driven Approach to Understanding and Advocating for Ethical Reform
site_url: https://dmccreary.github.io/ethics-course/

nav:
  - Welcome: index.md
  - Part I - Understanding:
    - Chapter 1 - Introduction: chapters/01-introduction/index.md
    - Chapter 2 - Measuring Harm:
      - Overview: chapters/02-measuring-harm/index.md
      - Rankings: chapters/02-measuring-harm/ranking.md
      - Scorecard: chapters/02-measuring-harm/scorecard.md
    - Chapter 3 - Gathering Data: chapters/03-gathering-data/index.md
  - Part II - Seeing the Picture:
    - Chapter 4 - Mapping Impact: chapters/04-mapping-impact/index.md
    - Chapter 5 - Systems Thinking: chapters/05-systems-thinking/index.md
  - Part III - Acting for Change:
    - Chapter 6 - Leverage Points: chapters/06-leverage-points/index.md
    - Chapter 7 - Advocating: chapters/07-advocating/index.md
    - Chapter 8 - Capstone: chapters/08-capstone/index.md
  - Glossary: glossary.md
  - References: references.md
  - About: about.md
"""
    return sample_config


def main():
    """Main function to run the collector."""
    
    import argparse
    
    parser = argparse.ArgumentParser(description='Collect markdown files from ethics-course repository')
    parser.add_argument('--use-sample', action='store_true', 
                       help='Use sample mkdocs.yml structure if unable to fetch from GitHub')
    parser.add_argument('--output', default='ethics_course_complete.md',
                       help='Output file path (default: ethics_course_complete.md)')
    
    args = parser.parse_args()
    
    # Configuration
    REPO_OWNER = "dmccreary"
    REPO_NAME = "ethics-course"
    BRANCH = "main"
    OUTPUT_FILE = args.output
    
    # Create collector
    collector = MarkdownCollector(REPO_OWNER, REPO_NAME, BRANCH)
    
    if args.use_sample:
        print("Using sample mkdocs.yml structure...")
        # Create a mock fetch that uses the sample
        sample_yaml = create_sample_mkdocs_yaml()
        config = collector.parse_mkdocs_yaml(sample_yaml)
        nav = config.get('nav', [])
        files = collector.extract_markdown_files(nav)
        
        print(f"Sample structure includes {len(files)} files")
        print("\nNote: Since we can't fetch from GitHub, creating a template structure.")
        
        # Create template content
        all_content = []
        header = """# Complete Ethics Course Content
        
This document contains the structure for the ethics-course repository.
Repository: https://github.com/dmccreary/ethics-course

Note: This is a template structure. To get actual content, run the script with access to GitHub.

---

"""
        all_content.append(header)
        
        for file_path in files:
            all_content.append(f"\n\n---\n\n<!-- Source: {file_path} -->\n\n# Content from {file_path}\n\n[Content would be fetched from GitHub]\n")
        
        final_content = '\n'.join(all_content)
        collector.save_to_file(final_content, OUTPUT_FILE)
        print(f"\n✅ Created template structure!")
        print(f"   Output file: {OUTPUT_FILE}")
    else:
        # Try to collect from GitHub
        all_content = collector.collect_all_markdown()
        
        if all_content:
            # Save to file
            collector.save_to_file(all_content, OUTPUT_FILE)
            print(f"\n✅ Successfully collected all markdown content!")
            print(f"   Output file: {OUTPUT_FILE}")
        else:
            print("\n❌ Failed to collect markdown content")
            print("\nTip: Run with --use-sample to create a template structure")


if __name__ == "__main__":
    main()