// Tobacco Industry System Components
// Interactive vis-network visualization showing interconnections in the tobacco industry

// ===========================================
// GLOBAL STATE
// ===========================================
let graphData = null;
let nodes, edges, network;
let currentFilter = 'all';
let selectedNode = null;

// ===========================================
// URL PARAMETER DETECTION
// ===========================================
function isSaveEnabled() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('enable-save') === 'true';
}

// ===========================================
// DATA LOADING
// ===========================================
async function loadGraphData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        graphData = await response.json();
        initializeNetwork();
    } catch (error) {
        console.error('Error loading graph data:', error);
        document.getElementById('status-text').innerHTML =
            '<span style="color: red;">Error loading data. Please check console.</span>';
    }
}

// ===========================================
// INITIALIZE NETWORK
// ===========================================
function initializeNetwork() {
    const saveEnabled = isSaveEnabled();
    const categories = graphData.categories;
    const edgeTypes = graphData.edgeTypes;

    // Show/hide save controls
    const saveControls = document.getElementById('save-controls');
    if (saveControls) {
        saveControls.style.display = saveEnabled ? 'flex' : 'none';
    }

    // Create nodes with category styling
    const visNodes = graphData.nodes.map(node => {
        const colors = categories[node.category];
        return {
            id: node.id,
            label: node.label,
            x: node.x,
            y: node.y,
            title: node.description,
            color: {
                background: colors.background,
                border: colors.border,
                highlight: {
                    background: lightenColor(colors.background, 20),
                    border: colors.border
                }
            },
            font: {
                color: colors.font,
                size: 12,
                face: 'Arial',
                multi: true
            },
            category: node.category,
            description: node.description,
            nodeTitle: node.title
        };
    });

    // Create edges with type styling
    const visEdges = graphData.edges.map((edge, index) => {
        const typeConfig = edgeTypes[edge.type];
        return {
            id: index,
            from: edge.from,
            to: edge.to,
            label: edge.label || '',
            color: {
                color: typeConfig.color,
                highlight: typeConfig.color,
                opacity: 0.8
            },
            dashes: typeConfig.dashes,
            width: typeConfig.width,
            arrows: { to: { enabled: true, scaleFactor: 0.8 } },
            smooth: { type: 'curvedCW', roundness: 0.1 },
            font: { size: 10, align: 'middle', color: '#333', strokeWidth: 2, strokeColor: '#ffffff' },
            type: edge.type,
            problematic: edge.problematic || false,
            description: edge.description,
            annotation: edge.annotation || null
        };
    });

    nodes = new vis.DataSet(visNodes);
    edges = new vis.DataSet(visEdges);

    const options = {
        layout: { improvedLayout: false },
        physics: { enabled: false },
        interaction: {
            selectConnectedEdges: true,
            hover: true,
            hoverConnectedEdges: true,
            dragNodes: saveEnabled,  // Only allow dragging in save mode
            dragView: saveEnabled,   // Only allow panning in save mode
            zoomView: saveEnabled,   // Only allow zooming in save mode
            navigationButtons: true
        },
        nodes: {
            shape: 'box',
            margin: { top: 8, bottom: 8, left: 10, right: 10 },
            borderWidth: 2,
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.15)',
                size: 4,
                x: 2,
                y: 2
            }
        },
        edges: {
            font: { strokeWidth: 2, strokeColor: '#ffffff' }
        }
    };

    const container = document.getElementById('network');
    const data = { nodes: nodes, edges: edges };
    network = new vis.Network(container, data, options);

    // Position view to show the network centered-left
    setTimeout(() => {
        network.moveTo({
            position: { x: -20, y: 0 },
            scale: 0.9,
            animation: false
        });
    }, 100);

    // Set up event handlers
    setupEventHandlers();

    // Update status if in save mode
    if (saveEnabled) {
        document.getElementById('status-text').innerHTML =
            '<strong>Editor Mode Active</strong><br><br>' +
            'Drag nodes to reposition them. When finished, click "Save Positions" to download updated data.json.';
    }
}

// ===========================================
// COLOR UTILITY
// ===========================================
function lightenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
}

// ===========================================
// EVENT HANDLERS
// ===========================================
function setupEventHandlers() {
    // Node click - highlight connections (when not in save mode)
    network.on('click', function(params) {
        if (!isSaveEnabled()) {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                highlightNodeConnections(nodeId);
            } else {
                resetHighlights();
            }
        }
    });

    // Node hover - show description
    network.on('hoverNode', function(params) {
        const node = nodes.get(params.node);
        updateStatusPanel(node);
    });

    // Edge hover - show description
    network.on('hoverEdge', function(params) {
        const edge = edges.get(params.edge);
        updateEdgeInfo(edge);
    });

    // Clear status on blur
    network.on('blurNode', function() {
        if (!selectedNode && !isSaveEnabled()) {
            resetStatusPanel();
        }
    });

    network.on('blurEdge', function() {
        if (!selectedNode && !isSaveEnabled()) {
            resetStatusPanel();
        }
    });

    // Track node position changes when dragging
    if (isSaveEnabled()) {
        network.on('dragEnd', function(params) {
            if (params.nodes.length > 0) {
                updateNodePositions();
            }
        });
    }
}

// ===========================================
// SAVE FUNCTIONALITY
// ===========================================
function updateNodePositions() {
    // Get current positions from the network
    const positions = network.getPositions();

    // Update graphData with new positions
    graphData.nodes.forEach(node => {
        if (positions[node.id]) {
            node.x = Math.round(positions[node.id].x);
            node.y = Math.round(positions[node.id].y);
        }
    });
}

function saveNodePositions() {
    // Make sure we have the latest positions
    updateNodePositions();

    // Update metadata
    graphData.metadata.lastUpdated = new Date().toISOString().split('T')[0];

    // Create JSON string with nice formatting
    const jsonString = JSON.stringify(graphData, null, 2);

    // Create download
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Update status
    document.getElementById('status-text').innerHTML =
        '<strong style="color: green;">Positions Saved!</strong><br><br>' +
        'Replace your existing data.json with the downloaded file to keep the new positions.';
}

// ===========================================
// HIGHLIGHT FUNCTIONS
// ===========================================
function highlightNodeConnections(nodeId) {
    selectedNode = nodeId;
    const node = nodes.get(nodeId);

    // Get connected edges
    const connectedEdges = edges.get().filter(e =>
        e.from === nodeId || e.to === nodeId
    );

    // Get connected nodes
    const connectedNodeIds = new Set([nodeId]);
    connectedEdges.forEach(e => {
        connectedNodeIds.add(e.from);
        connectedNodeIds.add(e.to);
    });

    // Dim non-connected elements
    nodes.forEach(n => {
        if (!connectedNodeIds.has(n.id)) {
            nodes.update({ id: n.id, opacity: 0.2 });
        } else {
            nodes.update({ id: n.id, opacity: 1 });
        }
    });

    edges.forEach(e => {
        const isConnected = connectedEdges.some(ce => ce.id === e.id);
        if (!isConnected) {
            edges.update({ id: e.id, color: { opacity: 0.1 } });
        } else {
            edges.update({ id: e.id, color: { opacity: 1 } });
        }
    });

    // Update status panel
    updateStatusPanel(node);

    // Show annotation if relevant
    checkAnnotations(nodeId);
}

function resetHighlights() {
    selectedNode = null;

    // Reset all node opacities
    nodes.forEach(n => {
        nodes.update({ id: n.id, opacity: 1 });
    });

    // Reset all edge opacities based on current filter
    applyFilter(currentFilter);

    resetStatusPanel();
    resetAnnotationPanel();
}

// ===========================================
// FILTER FUNCTIONS
// ===========================================
function applyFilter(filterType) {
    currentFilter = filterType;

    edges.forEach(e => {
        let visible = true;
        let opacity = 0.8;

        switch(filterType) {
            case 'money':
                visible = e.type === 'money';
                break;
            case 'information':
                visible = e.type === 'information';
                break;
            case 'influence':
                visible = e.type === 'influence';
                break;
            case 'products':
                visible = e.type === 'products';
                break;
            case 'regulatory':
                visible = e.type === 'regulatory';
                break;
            case 'problematic':
                visible = e.problematic === true;
                if (visible) opacity = 1;
                break;
            case 'all':
            default:
                visible = true;
                break;
        }

        edges.update({
            id: e.id,
            hidden: !visible,
            color: { opacity: visible ? opacity : 0.1 }
        });
    });
}

// ===========================================
// UI UPDATE FUNCTIONS
// ===========================================
function updateStatusPanel(node) {
    if (isSaveEnabled()) return; // Don't update in save mode

    const statusText = document.getElementById('status-text');
    const categoryName = node.category.charAt(0).toUpperCase() + node.category.slice(1);
    const categoryColor = graphData.categories[node.category].background;

    statusText.innerHTML = `
        <strong>${node.nodeTitle || node.label.replace('\n', ' ')}</strong><br>
        <span style="color: ${categoryColor}; font-weight: bold;">
            [${categoryName}]
        </span><br><br>
        ${node.description}
    `;
}

function updateEdgeInfo(edge) {
    if (isSaveEnabled()) return; // Don't update in save mode

    const statusText = document.getElementById('status-text');
    const fromNode = nodes.get(edge.from);
    const toNode = nodes.get(edge.to);
    const edgeColor = graphData.edgeTypes[edge.type].color;

    let typeLabel = edge.type.charAt(0).toUpperCase() + edge.type.slice(1);
    let problematicWarning = '';

    if (edge.problematic) {
        problematicWarning = '<br><span class="problematic-highlight">⚠ Problematic connection</span>';
    }

    statusText.innerHTML = `
        <strong>${fromNode.label.replace('\n', ' ')} → ${toNode.label.replace('\n', ' ')}</strong><br>
        <span style="color: ${edgeColor}; font-weight: bold;">
            [${typeLabel}]
        </span>
        ${problematicWarning}<br><br>
        ${edge.description}
    `;

    if (edge.annotation) {
        showAnnotation(edge.annotation);
    }
}

function resetStatusPanel() {
    if (isSaveEnabled()) return;

    const statusText = document.getElementById('status-text');
    statusText.innerHTML = 'Click or hover over any node to see its description and connections.';
}

function checkAnnotations(nodeId) {
    for (const [key, annotation] of Object.entries(graphData.annotations)) {
        if (annotation.nodes.includes(nodeId)) {
            showAnnotation(annotation.title);
            return;
        }
    }
    resetAnnotationPanel();
}

function showAnnotation(annotationKey) {
    const annotationText = document.getElementById('annotation-text');

    // Find matching annotation
    for (const [key, annotation] of Object.entries(graphData.annotations)) {
        if (annotation.title === annotationKey || key === annotationKey.toLowerCase().replace(' ', '_')) {
            annotationText.innerHTML = `
                <strong class="problematic-highlight">${annotation.title}</strong><br><br>
                ${annotation.text}
            `;
            return;
        }
    }
}

function resetAnnotationPanel() {
    const annotationText = document.getElementById('annotation-text');
    annotationText.innerHTML = 'This diagram shows how the tobacco industry operates as a complex system with multiple stakeholders and feedback loops.';
}

function resetNetwork() {
    selectedNode = null;
    currentFilter = 'all';
    document.getElementById('filter-select').value = 'all';

    // Reload from original data
    loadGraphData();
}

// ===========================================
// INITIALIZATION
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // Load data and initialize
    loadGraphData();

    // Filter dropdown
    document.getElementById('filter-select').addEventListener('change', function(e) {
        applyFilter(e.target.value);
    });

    // Reset button
    document.getElementById('reset-btn').addEventListener('click', resetNetwork);

    // Save button (only functional when save mode is enabled)
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveNodePositions);
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (network) {
            network.moveTo({
                position: { x: -20, y: 0 },
                scale: 0.9,
                animation: false
            });
        }
    });
});
