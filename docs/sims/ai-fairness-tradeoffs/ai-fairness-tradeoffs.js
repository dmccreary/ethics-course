// AI Fairness Trade-offs Explorer MicroSim
// Demonstrates the impossibility theorem in algorithmic fairness
// This file can be pasted directly into the p5.js editor at https://editor.p5js.org/

// Canvas dimensions
let canvasWidth = 750;
let drawHeight = 400;
let controlHeight = 120;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 180;
let defaultTextSize = 16;

// Global variables for responsive design
let containerWidth;
let containerHeight = canvasHeight;

// Simulation state
let threshold = 0.5;
let baseRateA = 0.5;
let baseRateB = 0.5;
let diffRates = false;
let groupA = [];
let groupB = [];
const numPoints = 100;

// Plot dimensions (calculated in setup)
let plotWidth, plotHeight;
let plotMargin = { top: 70, right: 20, bottom: 50, left: 20 };

// UI Controls
let thresholdSlider;
let rateASlider;
let rateBSlider;
let diffRatesCheckbox;

// Colors
const colors = {
    background: [240, 248, 255],      // aliceblue
    controlBg: [255, 255, 255],       // white
    truePositive: [34, 197, 94],      // green
    falsePositive: [239, 68, 68],     // red
    falseNegative: [245, 158, 11],    // orange
    trueNegative: [100, 116, 139],    // gray
    plotBg: [250, 250, 255],
    threshold: [100, 100, 100]
};

// Satisfaction thresholds for metrics
const satisfiedThreshold = 0.05;
const partialThreshold = 0.15;

function setup() {
    updateCanvasSize();
    const canvas = createCanvas(containerWidth, containerHeight);
    var mainElement = document.querySelector('main');
    canvas.parent(mainElement);

    textFont('Arial');
    textSize(defaultTextSize);

    // Calculate plot dimensions (narrower to make room for metrics panel)
    plotWidth = (containerWidth - plotMargin.left - plotMargin.right - 60) / 2 * 0.80;
    plotHeight = drawHeight - plotMargin.top - plotMargin.bottom;

    // Create sliders - Row 1: Threshold
    thresholdSlider = createSlider(0, 100, 50, 1);
    thresholdSlider.position(sliderLeftMargin, drawHeight + 12);
    thresholdSlider.size(containerWidth - sliderLeftMargin - margin);
    thresholdSlider.input(onThresholdChange);

    // Row 2: Base Rate A
    rateASlider = createSlider(10, 90, 50, 1);
    rateASlider.position(sliderLeftMargin, drawHeight + 42);
    rateASlider.size(containerWidth - sliderLeftMargin - margin);
    rateASlider.input(onRateAChange);

    // Row 3: Base Rate B (initially disabled appearance via drawing)
    rateBSlider = createSlider(10, 90, 50, 1);
    rateBSlider.position(sliderLeftMargin, drawHeight + 72);
    rateBSlider.size(containerWidth - sliderLeftMargin - margin);
    rateBSlider.input(onRateBChange);

    // Checkbox for different rates - positioned at the end of Row 3
    diffRatesCheckbox = createCheckbox(' Different Base Rates', false);
    diffRatesCheckbox.position(sliderLeftMargin + 180, drawHeight + 95);
    diffRatesCheckbox.changed(onDiffRatesChange);
    diffRatesCheckbox.style('color', '#333');
    diffRatesCheckbox.style('font-size', '14px');

    // Generate initial data
    generateData();

    describe('Interactive simulation exploring trade-offs between algorithmic fairness definitions. Adjust threshold and base rates to see how different fairness metrics respond.', LABEL);
}

function draw() {
    containerWidth = containerWidth || width;

    // Drawing area background
    fill(colors.background);
    stroke('silver');
    strokeWeight(1);
    rect(0, 0, containerWidth, drawHeight);

    // Control area background
    fill(colors.controlBg);
    stroke('silver');
    strokeWeight(1);
    rect(0, drawHeight, containerWidth, controlHeight);

    // Title (left-aligned to avoid overlap with Group B label)
    fill(0);
    noStroke();
    textSize(20);
    textAlign(LEFT, TOP);
    text('AI Fairness Trade-offs Explorer', plotMargin.left, 10);

    // Subtitle
    textSize(11);
    fill(100);
    text('Adjust threshold and base rates to explore the impossibility theorem', plotMargin.left, 32);

    // Update plot dimensions on resize (narrower to make room for metrics panel)
    plotWidth = (containerWidth - plotMargin.left - plotMargin.right - 60) / 2 * 0.80;

    // Draw the two group plots
    drawGroupPlot(groupA, plotMargin.left, plotMargin.top, 'Group A');
    drawGroupPlot(groupB, plotMargin.left + plotWidth + 20, plotMargin.top, 'Group B');

    // Draw metrics panel
    drawMetricsPanel();

    // Draw control labels
    drawControlLabels();

    // Draw legend
    drawLegend();
}

function drawGroupPlot(group, x, y, label) {
    // Plot background
    fill(colors.plotBg);
    stroke(200);
    strokeWeight(1);
    rect(x, y, plotWidth, plotHeight, 5);

    // Label
    fill(0);
    noStroke();
    textSize(14);
    textAlign(CENTER, BOTTOM);
    textStyle(BOLD);
    text(label, x + plotWidth / 2, y - 5);
    textStyle(NORMAL);

    // Threshold line
    let threshX = x + threshold * plotWidth;
    stroke(colors.threshold);
    strokeWeight(2);
    drawingContext.setLineDash([5, 5]);
    line(threshX, y, threshX, y + plotHeight);
    drawingContext.setLineDash([]);

    // Threshold label
    noStroke();
    fill(100);
    textSize(10);
    textAlign(CENTER, TOP);
    text('Threshold', threshX, y + plotHeight + 3);

    // Draw points
    noStroke();
    group.forEach((p, i) => {
        let px = x + p.score * plotWidth;
        let py = y + 15 + (i % 10) * (plotHeight - 30) / 10;

        let predicted = p.score >= threshold;

        // Color based on outcome
        if (predicted && p.trueLabel) {
            fill(colors.truePositive);
        } else if (predicted && !p.trueLabel) {
            fill(colors.falsePositive);
        } else if (!predicted && p.trueLabel) {
            fill(colors.falseNegative);
        } else {
            fill(colors.trueNegative);
        }

        circle(px, py, 8);
    });

    // Axis labels
    fill(120);
    textSize(10);
    noStroke();
    textAlign(LEFT, TOP);
    text('0', x + 2, y + plotHeight + 3);
    textAlign(RIGHT, TOP);
    text('1', x + plotWidth - 2, y + plotHeight + 3);
}

function drawMetricsPanel() {
    let metricsA = calculateMetrics(groupA, threshold);
    let metricsB = calculateMetrics(groupB, threshold);

    // Calculate differences
    let dpDiff = abs(metricsA.positiveRate - metricsB.positiveRate);
    let tprDiff = abs(metricsA.tpr - metricsB.tpr);
    let fprDiff = abs(metricsA.fpr - metricsB.fpr);
    let ppDiff = abs(metricsA.ppv - metricsB.ppv);

    // Metrics panel position (right side)
    let panelX = containerWidth - 167;
    let panelY = plotMargin.top + 10;
    let panelW = 150;
    let panelH = 150;

    // Panel background
    fill(255, 255, 255, 240);
    stroke(200);
    strokeWeight(1);
    rect(panelX, panelY, panelW, panelH, 8);

    // Title
    fill(0);
    noStroke();
    textSize(12);
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    text('Fairness Metrics', panelX + 10, panelY + 8);
    textStyle(NORMAL);

    // Metrics
    let metrics = [
        { name: 'Demographic Parity', diff: dpDiff },
        { name: 'Equalized TPR', diff: tprDiff },
        { name: 'Equalized FPR', diff: fprDiff },
        { name: 'Predictive Parity', diff: ppDiff }
    ];

    textSize(11);
    metrics.forEach((m, i) => {
        let yPos = panelY + 30 + i * 28;

        // Metric name
        fill(80);
        textAlign(LEFT, TOP);
        text(m.name, panelX + 10, yPos);

        // Status
        let status, statusColor;
        if (m.diff < satisfiedThreshold) {
            status = 'OK';
            statusColor = colors.truePositive;
        } else if (m.diff < partialThreshold) {
            status = nf(m.diff * 100, 1, 1) + '%';
            statusColor = colors.falseNegative;
        } else {
            status = nf(m.diff * 100, 1, 1) + '%';
            statusColor = colors.falsePositive;
        }

        fill(statusColor);
        textAlign(RIGHT, TOP);
        text(status, panelX + panelW - 10, yPos);
    });
}

function drawLegend() {
    let legendY = drawHeight - 25;
    let startX = plotMargin.left;
    let spacing = 100;

    textSize(10);
    textAlign(LEFT, CENTER);

    let items = [
        { label: 'True Pos', color: colors.truePositive },
        { label: 'False Pos', color: colors.falsePositive },
        { label: 'False Neg', color: colors.falseNegative },
        { label: 'True Neg', color: colors.trueNegative }
    ];

    items.forEach((item, i) => {
        let x = startX + i * spacing;
        fill(item.color);
        noStroke();
        circle(x, legendY, 10);
        fill(80);
        text(item.label, x + 10, legendY);
    });
}

function drawControlLabels() {
    fill(0);
    noStroke();
    textSize(14);
    textAlign(LEFT, CENTER);

    // Row 1: Threshold
    text('Threshold: ' + nf(threshold, 1, 2), 10, drawHeight + 22);

    // Row 2: Base Rate A
    text('Base Rate A: ' + nf(baseRateA * 100, 1, 0) + '%', 10, drawHeight + 52);

    // Row 3: Base Rate B
    if (diffRates) {
        fill(0);
    } else {
        fill(150);  // Dimmed when disabled
    }
    text('Base Rate B: ' + nf(baseRateB * 100, 1, 0) + '%', 10, drawHeight + 82);
}

function generateData() {
    groupA = [];
    groupB = [];

    for (let i = 0; i < numPoints; i++) {
        // Group A
        let trueA = random() < baseRateA;
        let scoreA = trueA
            ? constrain(0.6 + (random() - 0.5) * 0.6, 0, 1)
            : constrain(0.4 + (random() - 0.5) * 0.6, 0, 1);
        groupA.push({ score: scoreA, trueLabel: trueA });

        // Group B
        let trueB = random() < baseRateB;
        let scoreB = trueB
            ? constrain(0.6 + (random() - 0.5) * 0.6, 0, 1)
            : constrain(0.4 + (random() - 0.5) * 0.6, 0, 1);
        groupB.push({ score: scoreB, trueLabel: trueB });
    }
}

function calculateMetrics(group, thresh) {
    let tp = 0, fp = 0, tn = 0, fn = 0;

    group.forEach(p => {
        let predicted = p.score >= thresh;
        if (predicted && p.trueLabel) tp++;
        else if (predicted && !p.trueLabel) fp++;
        else if (!predicted && p.trueLabel) fn++;
        else tn++;
    });

    return {
        tp, fp, tn, fn,
        positiveRate: (tp + fp) / group.length,
        tpr: (tp + fn) > 0 ? tp / (tp + fn) : 0,
        fpr: (fp + tn) > 0 ? fp / (fp + tn) : 0,
        ppv: (tp + fp) > 0 ? tp / (tp + fp) : 0
    };
}

// Event handlers
function onThresholdChange() {
    threshold = thresholdSlider.value() / 100;
}

function onRateAChange() {
    baseRateA = rateASlider.value() / 100;
    if (!diffRates) {
        baseRateB = baseRateA;
        rateBSlider.value(rateASlider.value());
    }
    generateData();
}

function onRateBChange() {
    if (diffRates) {
        baseRateB = rateBSlider.value() / 100;
        generateData();
    }
}

function onDiffRatesChange() {
    diffRates = diffRatesCheckbox.checked();
    if (!diffRates) {
        baseRateB = baseRateA;
        rateBSlider.value(rateASlider.value());
        generateData();
    }
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(containerWidth, containerHeight);

    // Resize sliders
    thresholdSlider.size(containerWidth - sliderLeftMargin - margin);
    rateASlider.size(containerWidth - sliderLeftMargin - margin);
    rateBSlider.size(containerWidth - sliderLeftMargin - margin);

    // Update plot dimensions (narrower to make room for metrics panel)
    plotWidth = (containerWidth - plotMargin.left - plotMargin.right - 60) / 2 * 0.80;
}

function updateCanvasSize() {
    const container = document.querySelector('main');
    if (container) {
        containerWidth = Math.floor(container.getBoundingClientRect().width);
    } else {
        containerWidth = canvasWidth;
    }
}
