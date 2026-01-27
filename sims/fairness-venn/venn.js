// Venn Diagram - AI Model Consensus
// Supports edit mode via URL parameter: ?edit=true
// Supports dataset selection via dropdown or URL parameter: ?dataset=unfair.json

// Check for edit mode and dataset from URL
const urlParams = new URLSearchParams(window.location.search);
const editMode = urlParams.get('edit') === 'true';
const urlDataset = urlParams.get('dataset');

// Track current dataset
let currentDataset = urlDataset || 'data.json';

// Dataset metadata
const datasetMeta = {
    'data.json': {
        title: 'AI Model Consensus: Champions of Fairness',
        subtitle: 'Comparing which historical figures four AI models identified as working toward a fairer world'
    },
    'unfair.json': {
        title: 'AI Model Consensus: Architects of Unfairness',
        subtitle: 'Comparing which historical figures four AI models identified as making the world more unfair'
    }
};

// Setup SVG
const width = 800;
const height = 620;
const svg = d3.select("#venn")
    .attr("width", width)
    .attr("height", height);

// Tooltip
const tooltip = d3.select("#tooltip");

// Global data reference
let peopleData = [];
let colorsData = {};

// Ellipse definitions for 4-set Venn diagram
const ellipses = [
    { id: "Claude", cx: 320, cy: 260, rx: 230, ry: 170, angle: -40 },
    { id: "OpenAI", cx: 480, cy: 260, rx: 230, ry: 170, angle: 40 },
    { id: "Grok", cx: 320, cy: 360, rx: 230, ry: 170, angle: 40 },
    { id: "DeepSeek", cx: 480, cy: 360, rx: 230, ry: 170, angle: -40 }
];

// Label positions
const labelPositions = [
    { id: "Claude", x: 100, y: 100 },
    { id: "OpenAI", x: 660, y: 100 },
    { id: "Grok", x: 100, y: 540 },
    { id: "DeepSeek", x: 660, y: 540 }
];

// Calculate default position based on sources
function getDefaultPosition(sources) {
    const hasC = sources.includes("Claude");
    const hasO = sources.includes("OpenAI");
    const hasG = sources.includes("Grok");
    const hasD = sources.includes("DeepSeek");

    // All 4
    if (hasC && hasO && hasG && hasD) {
        return { x: 400, y: 310, region: "all" };
    }

    // 3 of 4
    if (hasC && hasO && hasG && !hasD) return { x: 320, y: 220, region: "COG" };
    if (hasC && hasO && hasD && !hasG) return { x: 480, y: 260, region: "COD" };
    if (hasC && hasG && hasD && !hasO) return { x: 320, y: 400, region: "CGD" };
    if (hasO && hasG && hasD && !hasC) return { x: 480, y: 400, region: "OGD" };

    // 2 of 4
    if (hasC && hasO && !hasG && !hasD) return { x: 400, y: 170, region: "CO" };
    if (hasC && hasG && !hasO && !hasD) return { x: 220, y: 310, region: "CG" };
    if (hasC && hasD && !hasO && !hasG) return { x: 360, y: 370, region: "CD" };
    if (hasO && hasG && !hasC && !hasD) return { x: 440, y: 350, region: "OG" };
    if (hasO && hasD && !hasC && !hasG) return { x: 580, y: 310, region: "OD" };
    if (hasG && hasD && !hasC && !hasO) return { x: 400, y: 480, region: "GD" };

    // 1 only
    if (hasC && !hasO && !hasG && !hasD) return { x: 150, y: 220, region: "C" };
    if (hasO && !hasC && !hasG && !hasD) return { x: 650, y: 220, region: "O" };
    if (hasG && !hasC && !hasO && !hasD) return { x: 150, y: 450, region: "G" };
    if (hasD && !hasC && !hasO && !hasG) return { x: 650, y: 450, region: "D" };

    return { x: 400, y: 300, region: "unknown" };
}

// Get display name - handles "Jr.", "Jr", "II", etc.
function getDisplayName(fullName) {
    const parts = fullName.split(" ");
    const suffixes = ["Jr.", "Jr", "Sr.", "Sr", "II", "III", "IV"];
    let lastName = parts.pop();
    if (suffixes.includes(lastName) && parts.length > 0) {
        lastName = parts.pop();
    }
    return lastName;
}

// Determine dot color based on sources
function getDotColor(sources) {
    if (sources.length === 4) return "#ffffff";
    if (sources.length === 1) return colorsData[sources[0]];
    let r = 0, g = 0, b = 0;
    sources.forEach(s => {
        const c = d3.color(colorsData[s]);
        r += c.r;
        g += c.g;
        b += c.b;
    });
    return d3.rgb(r / sources.length, g / sources.length, b / sources.length).toString();
}

// Initialize positions for people
function initializePositions(people) {
    // Group by region for offset calculation
    const regionCounts = {};
    people.forEach(p => {
        const pos = getDefaultPosition(p.sources);
        p.region = pos.region;
        if (!regionCounts[pos.region]) regionCounts[pos.region] = [];
        regionCounts[pos.region].push(p);
    });

    // Assign positions
    people.forEach(p => {
        // Use saved position if available
        if (p.x !== null && p.y !== null) {
            return;
        }

        const basePos = getDefaultPosition(p.sources);
        const regionPeople = regionCounts[p.region];
        const idx = regionPeople.indexOf(p);
        const total = regionPeople.length;

        let offsetX = 0, offsetY = 0;
        if (total > 1) {
            const angle = (idx / total) * Math.PI * 2 - Math.PI / 2;
            const radius = p.region === "all" ? 50 : Math.min(50, 22 * total);
            offsetX = Math.cos(angle) * radius;
            offsetY = Math.sin(angle) * radius;
        }

        p.x = basePos.x + offsetX;
        p.y = basePos.y + offsetY;
    });
}

// Draw the visualization
function drawVisualization(people, colors) {
    // Clear existing
    svg.selectAll("*").remove();

    // Draw ellipses
    ellipses.forEach(e => {
        svg.append("ellipse")
            .attr("class", "ellipse")
            .attr("cx", e.cx)
            .attr("cy", e.cy)
            .attr("rx", e.rx)
            .attr("ry", e.ry)
            .attr("transform", `rotate(${e.angle}, ${e.cx}, ${e.cy})`)
            .attr("fill", colors[e.id])
            .attr("stroke", colors[e.id]);
    });

    // Add model labels
    labelPositions.forEach(l => {
        svg.append("text")
            .attr("class", "ellipse-label")
            .attr("x", l.x)
            .attr("y", l.y)
            .attr("fill", colors[l.id])
            .text(l.id);
    });

    // Create groups for each person (dot + label)
    const personGroups = svg.selectAll(".person-group")
        .data(people)
        .enter()
        .append("g")
        .attr("class", "person-group")
        .attr("transform", d => `translate(${d.x}, ${d.y})`);

    // Draw dots
    personGroups.append("circle")
        .attr("class", "person-dot")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", d => 6 + d.sources.length * 2)
        .attr("fill", d => getDotColor(d.sources))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .style("color", d => getDotColor(d.sources));

    // Add name labels
    personGroups.append("text")
        .attr("class", "person-label")
        .attr("x", 0)
        .attr("y", d => 20 + d.sources.length * 2)
        .text(d => getDisplayName(d.name))
        .style("font-weight", d => d.sources.length === 4 ? "600" : "400")
        .style("fill", d => d.sources.length === 4 ? "#fff" : "#ccc");

    // Add interactions
    if (editMode) {
        setupEditMode(personGroups);
    } else {
        setupViewMode(personGroups);
    }
}

// View mode - tooltips only
function setupViewMode(personGroups) {
    personGroups
        .on("mouseover", function(event, d) {
            d3.select(this).select("circle")
                .attr("r", 8 + d.sources.length * 2);

            tooltip.style("opacity", 1)
                .html(`
                    <h3>${d.name} (${d.years})</h3>
                    <p>${d.description}</p>
                    <div class="sources">Mentioned by: ${d.sources.join(", ")}</div>
                `)
                .style("left", (event.pageX + 15) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mousemove", function(event) {
            tooltip.style("left", (event.pageX + 15) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function(event, d) {
            d3.select(this).select("circle")
                .attr("r", 6 + d.sources.length * 2);
            tooltip.style("opacity", 0);
        });
}

// Edit mode - drag functionality
function setupEditMode(personGroups) {
    const coordsDisplay = document.getElementById('coords-display');

    const drag = d3.drag()
        .on("start", function(event, d) {
            d3.select(this).select("circle").classed("dragging", true);
        })
        .on("drag", function(event, d) {
            d.x = event.x;
            d.y = event.y;
            d3.select(this).attr("transform", `translate(${d.x}, ${d.y})`);
            coordsDisplay.textContent = `${d.name}: (${Math.round(d.x)}, ${Math.round(d.y)})`;
        })
        .on("end", function(event, d) {
            d3.select(this).select("circle").classed("dragging", false);
        });

    personGroups.call(drag);

    // Also show tooltip on hover in edit mode
    personGroups
        .on("mouseover", function(event, d) {
            tooltip.style("opacity", 1)
                .html(`
                    <h3>${d.name}</h3>
                    <p>Position: (${Math.round(d.x)}, ${Math.round(d.y)})</p>
                    <div class="sources">Drag to reposition</div>
                `)
                .style("left", (event.pageX + 15) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function() {
            tooltip.style("opacity", 0);
        });
}

// Save positions to JSON file (uses current dataset name)
function savePositions() {
    const exportData = {
        people: peopleData.map(p => ({
            name: p.name,
            sources: p.sources,
            description: p.description,
            years: p.years,
            x: Math.round(p.x),
            y: Math.round(p.y)
        })),
        colors: colorsData
    };

    const blob = new Blob([JSON.stringify(exportData, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentDataset; // Save with current dataset filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Reset to default positions
function resetPositions() {
    peopleData.forEach(p => {
        p.x = null;
        p.y = null;
    });
    initializePositions(peopleData);
    drawVisualization(peopleData, colorsData);
}

// Initialize edit mode UI
function initEditModeUI() {
    document.body.classList.add('edit-mode');
    document.getElementById('edit-banner').classList.add('visible');
    document.getElementById('edit-controls').classList.add('visible');

    document.getElementById('save-btn').addEventListener('click', savePositions);
    document.getElementById('reset-btn').addEventListener('click', resetPositions);
}

// Update page title and subtitle
function updatePageMeta(dataset) {
    const meta = datasetMeta[dataset];
    if (meta) {
        document.getElementById('main-title').textContent = meta.title;
        document.getElementById('subtitle').textContent = meta.subtitle;
    }
}

// Load a specific dataset
async function loadDataset(datasetFile) {
    try {
        const response = await fetch(datasetFile);
        const data = await response.json();

        currentDataset = datasetFile;
        peopleData = data.people;
        colorsData = data.colors;

        initializePositions(peopleData);
        drawVisualization(peopleData, colorsData);
        updatePageMeta(datasetFile);

        // Update stats
        const allFourCount = peopleData.filter(p => p.sources.length === 4).length;
        const statsEl = document.querySelector('.stats');
        if (statsEl) {
            statsEl.innerHTML = `<strong>${allFourCount} people</strong> mentioned by all 4 models | <strong>${peopleData.length} unique people</strong> total`;
        }
    } catch (error) {
        console.error('Error loading dataset:', error);
    }
}

// Initialize dropdown and event listeners
function initDatasetSelector() {
    const select = document.getElementById('dataset-select');

    // Set initial value from URL or default
    select.value = currentDataset;

    // Handle changes
    select.addEventListener('change', (e) => {
        loadDataset(e.target.value);
    });
}

// Load data and initialize
async function init() {
    try {
        // Initialize dataset selector
        initDatasetSelector();

        // Load initial dataset
        await loadDataset(currentDataset);

        if (editMode) {
            initEditModeUI();
        }
    } catch (error) {
        console.error('Error initializing:', error);
    }
}

// Start
init();
