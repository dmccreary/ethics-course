// Critical Thinking Framework for Ethical Analysis MicroSim
// A circular infographic showing evaluation criteria for ethical claims

// Canvas dimensions
let canvasWidth = 600;
let drawHeight = 550;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

// Circle properties
let centerX, centerY;
let outerRadius = 180;
let innerRadius = 60;
let segmentCount = 6;

// Segment data
let segments = [
  {
    label: "SOURCE",
    question: "Who is making this claim? What are their incentives?",
    icon: "person",
    greenTip: "Independent researchers, peer-reviewed journals, no financial stake",
    yellowTip: "Industry-funded but disclosed, advocacy groups with clear mission",
    redTip: "Anonymous sources, undisclosed conflicts of interest, financial gain"
  },
  {
    label: "EVIDENCE",
    question: "What data supports this? Is it peer-reviewed?",
    icon: "document",
    greenTip: "Multiple peer-reviewed studies, large sample sizes, replicated results",
    yellowTip: "Single study, preprint, expert opinion",
    redTip: "No citations, anecdotal evidence, cherry-picked data"
  },
  {
    label: "METHODOLOGY",
    question: "How was this measured? Are there biases?",
    icon: "ruler",
    greenTip: "Randomized controlled trials, transparent methods, pre-registered",
    yellowTip: "Observational studies, disclosed limitations",
    redTip: "No methodology disclosed, biased sampling, leading questions"
  },
  {
    label: "CONSISTENCY",
    question: "Does this align with other reliable sources?",
    icon: "check",
    greenTip: "Matches scientific consensus, supported by multiple sources",
    yellowTip: "Some disagreement in field, emerging research area",
    redTip: "Contradicts established science, single outlier source"
  },
  {
    label: "ALTERNATIVES",
    question: "What other explanations exist?",
    icon: "branch",
    greenTip: "Alternative explanations addressed and ruled out",
    yellowTip: "Some alternatives mentioned but not fully explored",
    redTip: "No consideration of alternatives, assumes single cause"
  },
  {
    label: "IMPLICATIONS",
    question: "What follows if true? Does that make sense?",
    icon: "arrow",
    greenTip: "Logical consequences, proportionate claims, actionable insights",
    yellowTip: "Some claims may be overstated, requires more research",
    redTip: "Extraordinary claims without evidence, logical fallacies"
  }
];

// Interaction state
let hoveredSegment = -1;
let selectedSegment = -1;
let showingDetail = false;

// Animation
let pulseAngle = 0;

// Colors
let greenColor, yellowColor, redColor;
let segmentColors = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Define colors
  greenColor = color(76, 175, 80);    // Green
  yellowColor = color(255, 193, 7);   // Amber/Yellow
  redColor = color(244, 67, 54);      // Red

  // Create gradient colors for each segment
  for (let i = 0; i < segmentCount; i++) {
    segmentColors.push(color(70, 130, 180)); // Steel blue base
  }

  textFont('Arial');

  describe('Interactive circular infographic for critical thinking about ethical claims. Click segments to learn evaluation criteria.', LABEL);
}

function draw() {
  updateCanvasSize();

  // Update center position based on canvas width
  centerX = canvasWidth / 2;
  centerY = drawHeight / 2 + 20;

  // Scale radius based on canvas width
  outerRadius = min(180, (canvasWidth - 100) / 3);
  innerRadius = outerRadius / 3;

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill(50);
  noStroke();
  textSize(22);
  textAlign(CENTER, TOP);
  text('Critical Thinking Framework', canvasWidth / 2, 10);
  textSize(14);
  fill(100);
  text('for Ethical Analysis', canvasWidth / 2, 35);

  // Animate pulse
  pulseAngle += 0.02;

  // Draw the circular framework
  drawCircularFramework();

  // Draw center question
  drawCenterQuestion();

  // Draw detail panel if segment selected
  if (selectedSegment >= 0) {
    drawDetailPanel();
  }

  // Draw instructions in control area
  drawControlArea();
}

function drawCircularFramework() {
  let angleStep = TWO_PI / segmentCount;
  let startAngle = -HALF_PI - angleStep / 2; // Start from top

  for (let i = 0; i < segmentCount; i++) {
    let angle1 = startAngle + i * angleStep;
    let angle2 = angle1 + angleStep;

    // Check if hovered
    let isHovered = (i === hoveredSegment);
    let isSelected = (i === selectedSegment);

    // Draw segment
    let currentOuterRadius = outerRadius;
    if (isHovered || isSelected) {
      currentOuterRadius = outerRadius + 10;
    }

    // Segment fill color
    if (isSelected) {
      fill(100, 149, 237); // Cornflower blue when selected
    } else if (isHovered) {
      fill(135, 206, 250); // Light sky blue on hover
    } else {
      fill(70, 130, 180, 200); // Steel blue
    }

    stroke(255);
    strokeWeight(2);

    // Draw arc segment
    beginShape();
    // Inner arc
    for (let a = angle1; a <= angle2; a += 0.05) {
      let x = centerX + cos(a) * innerRadius;
      let y = centerY + sin(a) * innerRadius;
      vertex(x, y);
    }
    // Outer arc (reversed)
    for (let a = angle2; a >= angle1; a -= 0.05) {
      let x = centerX + cos(a) * currentOuterRadius;
      let y = centerY + sin(a) * currentOuterRadius;
      vertex(x, y);
    }
    endShape(CLOSE);

    // Draw segment label
    let midAngle = (angle1 + angle2) / 2;
    let labelRadius = (innerRadius + currentOuterRadius) / 2;
    let labelX = centerX + cos(midAngle) * labelRadius;
    let labelY = centerY + sin(midAngle) * labelRadius;

    fill(255);
    noStroke();
    textSize(12);
    textAlign(CENTER, CENTER);

    // Rotate text to be readable
    push();
    translate(labelX, labelY);
    if (midAngle > HALF_PI && midAngle < PI + HALF_PI) {
      rotate(midAngle + PI);
    } else {
      rotate(midAngle);
    }
    text(segments[i].label, 0, 0);
    pop();

    // Draw icon outside the circle
    let iconRadius = currentOuterRadius + 30;
    let iconX = centerX + cos(midAngle) * iconRadius;
    let iconY = centerY + sin(midAngle) * iconRadius;

    drawIcon(segments[i].icon, iconX, iconY, isHovered || isSelected);
  }
}

function drawIcon(iconType, x, y, highlighted) {
  push();
  translate(x, y);

  let iconSize = highlighted ? 48 : 40;

  if (highlighted) {
    fill(70, 130, 180);
  } else {
    fill(120);
  }
  noStroke();

  textSize(iconSize);
  textAlign(CENTER, CENTER);

  // Simple emoji icons
  let icons = {
    "person": "\u{1F464}",    // Person silhouette
    "document": "\u{1F4C4}", // Document
    "ruler": "\u{1F4CF}",    // Ruler
    "check": "\u{2705}",     // Check mark
    "branch": "\u{1F500}",   // Shuffle/branch
    "arrow": "\u{27A1}"      // Arrow
  };

  text(icons[iconType] || "?", 0, 0);
  pop();
}

function drawCenterQuestion() {
  // Pulsing center circle
  let pulse = sin(pulseAngle) * 5;

  // Outer glow
  noStroke();
  for (let i = 20; i > 0; i--) {
    fill(100, 149, 237, 10);
    ellipse(centerX, centerY, innerRadius * 2 - 10 + i * 2 + pulse);
  }

  // Center circle
  fill(255);
  stroke(100, 149, 237);
  strokeWeight(3);
  ellipse(centerX, centerY, innerRadius * 2 - 10 + pulse);

  // Center text
  fill(50);
  noStroke();
  textSize(11);
  textAlign(CENTER, CENTER);
  textLeading(14);
  text("Is this\nclaim\ncredible?", centerX, centerY);

  // Reset button indicator
  if (selectedSegment >= 0) {
    fill(100, 149, 237);
    textSize(9);
    text("Click to reset", centerX, centerY + 30);
  }
}

function drawDetailPanel() {
  let segment = segments[selectedSegment];

  // Panel dimensions - 50% wider
  let panelWidth = min(480, canvasWidth - 40);
  let panelHeight = 130;
  let panelX = centerX - panelWidth / 2;
  let panelY = drawHeight - panelHeight - 20;

  // Panel background
  fill(255, 255, 255, 245);
  stroke(200);
  strokeWeight(1);
  rect(panelX, panelY, panelWidth, panelHeight, 10);

  // Header
  fill(70, 130, 180);
  noStroke();
  rect(panelX, panelY, panelWidth, 40, 10, 10, 0, 0);

  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(segment.label + ": " + segment.question, panelX + panelWidth / 2, panelY + 20);

  // Color-coded indicators
  let indicatorY = panelY + 50;
  let indicatorWidth = panelWidth - 30;
  let indicatorHeight = 24;
  let swatchSize = 16;
  let rowSpacing = 1;

  // Green indicator
  fill(greenColor);
  noStroke();
  rect(panelX + 15, indicatorY + (indicatorHeight - swatchSize) / 2, swatchSize, swatchSize);
  fill(50);
  textSize(12);
  textAlign(LEFT, TOP);
  textLeading(14);
  text(segment.greenTip, panelX + 40, indicatorY + 5, indicatorWidth - 35, indicatorHeight);

  // Yellow indicator
  indicatorY += indicatorHeight + rowSpacing;
  fill(yellowColor);
  rect(panelX + 15, indicatorY + (indicatorHeight - swatchSize) / 2, swatchSize, swatchSize);
  fill(50);
  text(segment.yellowTip, panelX + 40, indicatorY + 5, indicatorWidth - 35, indicatorHeight);

  // Red indicator
  indicatorY += indicatorHeight + rowSpacing;
  fill(redColor);
  rect(panelX + 15, indicatorY + (indicatorHeight - swatchSize) / 2, swatchSize, swatchSize);
  fill(50);
  text(segment.redTip, panelX + 40, indicatorY + 5, indicatorWidth - 35, indicatorHeight);
}

function drawControlArea() {
  fill(80);
  textSize(14);
  textAlign(CENTER, CENTER);

  if (selectedSegment >= 0) {
    text("Click center circle or press ESC to evaluate a new claim", canvasWidth*.3, drawHeight + controlHeight / 2);
  } else {
    text("Click any segment to see evaluation criteria", canvasWidth*.3, drawHeight + controlHeight / 2);
  }

  // Draw color legend
  let legendX = canvasWidth - 240;
  let legendY = drawHeight + 15;

  textSize(16);
  textAlign(LEFT, CENTER);
  push();
    translate(-50, 7);

    fill(greenColor);
    circle(legendX, legendY, 10);
    fill(80);
    text("Strong", legendX + 10, legendY);

    legendX += 90;
    fill(yellowColor);
    circle(legendX, legendY, 10);
    fill(80);
    text("Caution", legendX+10, legendY);

    legendX += 90;
    fill(redColor);
    circle(legendX, legendY, 10);
    fill(80);
    text("Red Flag", legendX +10, legendY);
  pop()
}

function mousePressed() {
  // Check if clicking center to reset
  let distToCenter = dist(mouseX, mouseY, centerX, centerY);
  if (distToCenter < innerRadius - 5) {
    selectedSegment = -1;
    return;
  }

  // Check if clicking a segment
  if (distToCenter > innerRadius && distToCenter < outerRadius + 20) {
    let clickAngle = atan2(mouseY - centerY, mouseX - centerX);
    let angleStep = TWO_PI / segmentCount;
    let startAngle = -HALF_PI - angleStep / 2;

    // Normalize angle
    if (clickAngle < startAngle) {
      clickAngle += TWO_PI;
    }

    for (let i = 0; i < segmentCount; i++) {
      let angle1 = startAngle + i * angleStep;
      let angle2 = angle1 + angleStep;

      // Normalize angles for comparison
      let normalizedClick = clickAngle;
      let normalizedA1 = angle1;
      let normalizedA2 = angle2;

      if (normalizedA1 < 0) normalizedA1 += TWO_PI;
      if (normalizedA2 < 0) normalizedA2 += TWO_PI;
      if (normalizedClick < 0) normalizedClick += TWO_PI;

      // Check if click is within this segment's angle range
      if (normalizedClick >= normalizedA1 && normalizedClick < normalizedA2) {
        selectedSegment = i;
        return;
      }
    }

    // Handle wrap-around case
    let normalizedClick = clickAngle;
    if (normalizedClick < 0) normalizedClick += TWO_PI;

    let segIndex = floor((normalizedClick - startAngle) / angleStep);
    if (segIndex < 0) segIndex += segmentCount;
    segIndex = segIndex % segmentCount;
    selectedSegment = segIndex;
  }
}

function mouseMoved() {
  // Check hover state
  let distToCenter = dist(mouseX, mouseY, centerX, centerY);

  if (distToCenter > innerRadius && distToCenter < outerRadius + 20) {
    let hoverAngle = atan2(mouseY - centerY, mouseX - centerX);
    let angleStep = TWO_PI / segmentCount;
    let startAngle = -HALF_PI - angleStep / 2;

    let normalizedAngle = hoverAngle - startAngle;
    if (normalizedAngle < 0) normalizedAngle += TWO_PI;

    hoveredSegment = floor(normalizedAngle / angleStep) % segmentCount;
  } else {
    hoveredSegment = -1;
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    selectedSegment = -1;
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
