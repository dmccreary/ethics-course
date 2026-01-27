// Cultural Fairness Frameworks - Interactive Matrix

let frameworkData = null;

// DOM elements
const matrixBody = document.getElementById('matrix-body');
const detailPanel = document.getElementById('detail-panel');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

// Load data and initialize
async function init() {
    try {
        const response = await fetch('./data.json');
        frameworkData = await response.json();
        generateMatrix();
        setupEventListeners();
    } catch (error) {
        console.error('Error loading data:', error);
        matrixBody.innerHTML = '<tr><td colspan="6">Error loading data. Please refresh the page.</td></tr>';
    }
}

// Generate matrix
function generateMatrix() {
    matrixBody.innerHTML = '';

    frameworkData.traditions.forEach(tradition => {
        const row = document.createElement('tr');

        // Tradition name cell
        const nameCell = document.createElement('td');
        nameCell.className = 'tradition-name';
        nameCell.innerHTML = `${tradition.name}<span class="sub">${tradition.subtitle}</span>`;
        row.appendChild(nameCell);

        // Dimension cells
        frameworkData.dimensions.forEach(dim => {
            const cell = document.createElement('td');
            const dimData = tradition.dimensions[dim.key];
            cell.className = `cell emphasis-${dimData.emphasis}`;
            cell.textContent = dimData.value;
            cell.dataset.tradition = tradition.name;
            cell.dataset.dimension = dim.name;
            cell.addEventListener('click', () => showDetail(tradition, dim.key, dim.name));
            row.appendChild(cell);
        });

        matrixBody.appendChild(row);
    });
}

// Show detail panel
function showDetail(tradition, dimKey, dimName) {
    const dimData = tradition.dimensions[dimKey];

    document.getElementById('detail-tradition').textContent = tradition.name;
    document.getElementById('detail-dimension').textContent = dimName;
    document.getElementById('detail-description').textContent = dimData.description;
    document.getElementById('detail-example').textContent = dimData.example;

    // Generate thinker tags
    const thinkersContainer = document.getElementById('detail-thinkers');
    thinkersContainer.innerHTML = tradition.thinkers
        .map(t => `<span class="thinker-tag">${t}</span>`)
        .join('');

    detailPanel.classList.add('open');
    overlay.classList.add('open');
}

// Close detail panel
function closeDetail() {
    detailPanel.classList.remove('open');
    overlay.classList.remove('open');
}

// Setup event listeners
function setupEventListeners() {
    closeBtn.addEventListener('click', closeDetail);
    overlay.addEventListener('click', closeDetail);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDetail();
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
