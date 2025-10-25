// Harmful Industries Bubble Chart
// A 2D visualization comparing harm to people vs harm to planet

// Canvas dimensions
let canvasWidth = 800; // will be updated responsively
let drawHeight = 550;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 60;

// Data for each industry
let industries = [
  {
    name: "Tobacco",
    harmToPeople: 95, // 8M deaths/year
    harmToPlanet: 15,
    economicImpact: 85,
    color: '#e74c3c',
    summary: "8M deaths/year from NCDs and second-hand smoke"
  },
  {
    name: "Alcohol",
    harmToPeople: 75, // 2.6M deaths/year
    harmToPlanet: 20,
    economicImpact: 80,
    color: '#9b59b6',
    summary: "2.6M deaths/year from injuries, cancers, liver disease"
  },
  {
    name: "Fossil\nFuels",
    harmToPeople: 97, // 8.1M deaths from air pollution
    harmToPlanet: 98, // Massive climate impact
    economicImpact: 100, // Largest industry
    color: '#34495e',
    summary: "8.1M deaths/year from air pollution; major climate driver"
  },
  {
    name: "Ultra-processed Foods",
    harmToPeople: 100, // 11M deaths
    harmToPlanet: 35,
    economicImpact: 95,
    color: '#f39c12',
    summary: "11M deaths/year from diet-related NCDs"
  },
  {
    name: "Illicit\nDrugs",
    harmToPeople: 60, // 0.6M deaths
    harmToPlanet: 10,
    economicImpact: 70,
    color: '#8e44ad',
    summary: "0.6M deaths/year from overdoses and violence"
  },
  {
    name: "Sex\nTrafficking",
    harmToPeople: 85, // Extreme human rights abuse
    harmToPlanet: 5,
    economicImpact: 65, // $236B illegal profits
    color: '#c0392b',
    summary: "50M in modern slavery; $236B/year illegal profits"
  },
  {
    name: "Arms\nTrade",
    harmToPeople: 80, // 122K battle deaths
    harmToPlanet: 40, // Manufacturing/testing impacts
    economicImpact: 90, // $2.44T spending
    color: '#7f8c8d',
    summary: "122K battle deaths/year; $2.72T global military spending"
  },
  {
    name: "Cybercrime",
    harmToPeople: 50, // Indirect harm
    harmToPlanet: 15,
    economicImpact: 95, // $10.5T estimate
    color: '#16a085',
    summary: "$10.5T/year global cost; critical infrastructure disruption"
  },
  {
    name: "Healthcare\nFraud",
    harmToPeople: 55, // Delayed/denied care
    harmToPlanet: 5,
    economicImpact: 75, // $68-230B in US alone
    color: '#d35400',
    summary: "$68-230B/year in US; diverted medical resources"
  },
  {
    name: "Human\nSmuggling",
    harmToPeople: 65, // 8,938 deaths
    harmToPlanet: 10,
    economicImpact: 40, // $5.5-7B
    color: '#e67e22',
    summary: "8,938 migrant deaths in 2024; $5.5-7B market"
  },
  {
    name: "Gambling",
    harmToPeople: 45, // Addiction, suicide
    harmToPlanet: 5,
    economicImpact: 70,
    color: '#27ae60',
    summary: "1.2% of adults have gambling disorder; multi-billion social costs"
  },
  {
    name: "Industrial\nLivestock",
    harmToPeople: 50, // AMR risks, diet impacts
    harmToPlanet: 92, // 14.5% of GHG
    economicImpact: 85,
    color: '#795548',
    summary: "14.5% of anthropogenic GHG; antimicrobial resistance risks"
  },
  {
    name: "Deforestation",
    harmToPeople: 30, // Indirect: Indigenous rights
    harmToPlanet: 95, // Biodiversity loss, carbon
    economicImpact: 60,
    color: '#4caf50',
    summary: "10M hectares/year lost; biodiversity crisis"
  },
  {
    name: "Fast\nFashion",
    harmToPeople: 35, // Labor abuses
    harmToPlanet: 75, // 2-8% CO2, 20% wastewater
    economicImpact: 70,
    color: '#e91e63',
    summary: "2-8% of global CO2; 20% of industrial wastewater"
  },
  {
    name: "Crypto\nBitcoin",
    harmToPeople: 25, // Fraud/scams
    harmToPlanet: 70, // Energy consumption
    economicImpact: 55,
    color: '#ff9800',
    summary: "High energy use; $40.9B illicit flows in 2024"
  },
  {
    name: "Pornography",
    harmToPeople: 20, // Mental health impacts
    harmToPlanet: 5,
    economicImpact: 65,
    color: '#9c27b0',
    summary: "Single-digit to low-double-digit % problematic use"
  }
];

// Bubble object with hover detection
let bubbles = [];
let hoveredBubble = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Create bubble objects with positions
  for (let industry of industries) {
    // Map harm values (0-100) to canvas coordinates
    let x = map(industry.harmToPlanet, 0, 100, margin, canvasWidth - margin);
    let y = map(industry.harmToPeople, 0, 100, drawHeight - margin, margin);
    let size = map(industry.economicImpact, 0, 100, 20, 80);

    bubbles.push({
      x: x,
      y: y,
      size: size,
      data: industry
    });
  }

  describe('Interactive bubble chart showing harmful industries plotted by harm to people versus harm to planet, with bubble size representing economic impact.');
  updateCanvasSize();
}

function draw() {
  updateCanvasSize();
  // Drawing area
  background('aliceblue');

  // Draw axes
  drawAxes();

  // Draw quadrant labels
  drawQuadrantLabels();

  // Check for hover
  hoveredBubble = null;
  for (let bubble of bubbles) {
    let d = dist(mouseX, mouseY, bubble.x, bubble.y);
    if (d < bubble.size / 2 && mouseY < drawHeight) {
      hoveredBubble = bubble;
    }
  }

  // Draw all bubbles
  for (let bubble of bubbles) {
    let isHovered = bubble === hoveredBubble;
    drawBubble(bubble, isHovered);
  }

  // Draw tooltip
  if (hoveredBubble) {
    drawTooltip(hoveredBubble);
  }

  // Control area
  fill(255);
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Instructions in control area
  fill(60);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Hover over bubbles to see industry details", canvasWidth / 2, drawHeight + 25);
}

function drawAxes() {
  stroke(80);
  strokeWeight(2);

  // X-axis
  line(margin, drawHeight - margin, canvasWidth - margin, drawHeight - margin);

  // Y-axis
  line(margin, margin, margin, drawHeight - margin);

  // Axis labels
  fill(60);
  noStroke();
  textSize(16);
  textStyle(BOLD);

  // X-axis label
  textAlign(CENTER, TOP);
  text("Harm to Planet →", canvasWidth / 2, drawHeight - margin + 15);

  // Y-axis label
  push();
  translate(15, drawHeight / 2);
  rotate(-PI / 2);
  textAlign(CENTER, CENTER);
  text("Harm to People →", 0, 0);
  pop();

  // Add scale indicators
  textStyle(NORMAL);
  textSize(11);
  fill(100);

  // X-axis scale
  textAlign(CENTER, TOP);
  text("Low", margin + 30, drawHeight - margin + 35);
  text("High", canvasWidth - margin - 30, drawHeight - margin + 35);

  // Y-axis scale
  textAlign(RIGHT, CENTER);
  text("Low", margin - 10, drawHeight - margin - 30);
  text("High", margin - 10, margin + 30);
}

function drawQuadrantLabels() {
  fill(120, 150);
  textSize(12);
  textStyle(ITALIC);

  let midX = (margin + canvasWidth - margin) / 2;
  let midY = (margin + drawHeight - margin) / 2;

  // Upper right - worst quadrant
  textAlign(CENTER, CENTER);
  text("High harm to both", canvasWidth - margin - 80, margin + 40);

  // Upper left
  text("High people harm\nLower planet harm", margin + 80, margin + 40);

  // Lower right
  text("High planet harm\nLower people harm", canvasWidth - margin - 80, drawHeight - margin - 40);
}

function drawBubble(bubble, isHovered) {
  let c = color(bubble.data.color);

  if (isHovered) {
    // Highlight effect
    fill(red(c), green(c), blue(c), 220);
    strokeWeight(3);
    stroke(0);
  } else {
    fill(red(c), green(c), blue(c), 180);
    strokeWeight(1.5);
    stroke(255, 255, 255, 200);
  }

  circle(bubble.x, bubble.y, bubble.size);

  // Label for larger bubbles or when hovered
  if (bubble.size > 50 || isHovered) {
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(10);
    textStyle(BOLD);
    text(bubble.data.name, bubble.x, bubble.y);
  }
}

function drawTooltip(bubble) {
  let tooltipWidth = 300;
  let tooltipHeight = 80;
  let tooltipX = mouseX + 15;
  let tooltipY = mouseY - tooltipHeight - 15;

  // Keep tooltip on screen
  if (tooltipX + tooltipWidth > canvasWidth - 10) {
    tooltipX = mouseX - tooltipWidth - 15;
  }
  if (tooltipY < 10) {
    tooltipY = mouseY + 15;
  }

  // Tooltip background
  fill(255, 255, 255, 250);
  stroke(60);
  strokeWeight(2);
  rect(tooltipX, tooltipY, tooltipWidth, tooltipHeight, 8);

  // Tooltip content
  fill(40);
  noStroke();
  textAlign(LEFT, TOP);

  // Industry name
  textSize(14);
  textStyle(BOLD);
  text(bubble.data.name, tooltipX + 10, tooltipY + 10);

  // Summary
  textSize(11);
  textStyle(NORMAL);
  text(bubble.data.summary, tooltipX + 10, tooltipY + 30, tooltipWidth - 20, 40);
}

function windowResized() {
  updateCanvasSize();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    resizeCanvas(canvasWidth, canvasHeight);

    // Recalculate bubble positions
    bubbles = [];
    for (let industry of industries) {
      let x = map(industry.harmToPlanet, 0, 100, margin, canvasWidth - margin);
      let y = map(industry.harmToPeople, 0, 100, drawHeight - margin, margin);
      let size = map(industry.economicImpact, 0, 100, 20, 80);

      bubbles.push({
        x: x,
        y: y,
        size: size,
        data: industry
      });
    }
  }
}
