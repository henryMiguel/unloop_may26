let numRings = 100;
let currentSpeed = 0.008;
let lastMouseMove = 0;
let time = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight * 0.7, WEBGL);
  canvas.parent("hero-canvas-container");
  noFill();
  strokeWeight(1.5);
}

function draw() {
  clear();
  stroke(0, 255, 0); // Neon Green

  let mouseV = dist(mouseX, mouseY, pmouseX, pmouseY);
  let friction = map(mouseV, 0, 50, 0, 1, true);

  if (mouseV > 0.5) {
    lastMouseMove = millis();
    currentSpeed = lerp(currentSpeed, 0.015, 0.1);
  } else if (millis() - lastMouseMove > 2000) {
    currentSpeed = lerp(currentSpeed, 0.001, 0.02);
  }

  time += currentSpeed;

  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;

  for (let i = 0; i < numRings; i++) {
    beginShape();

    let baseRadius = 15 + i * 3;
    let noiseScale = 0.5;
    let ringOffset = i * 0.05;

    for (let a = 0; a < TWO_PI; a += 0.05) {
      let xoff = cos(a) * noiseScale;
      let yoff = sin(a) * noiseScale;
      let zoff = time + ringOffset;

      let nudge = noise(xoff + 1, yoff + 1, zoff) * 120;
      let r = baseRadius + nudge;

      let x = r * cos(a) * 3;
      let y = r * sin(a);

      let d = dist(x, y, mx, my);

      // --- RECOIL / DISPLACEMENT LOGIC ---
      // If mouse is near, push the vertex away
      if (d < 100) {
        let angle = atan2(y - my, x - mx);
        let force = map(d, 0, 100, 40, 0); // Stronger push when closer
        x += cos(angle) * force;
        y += sin(angle) * force;
      }

      // --- THE CUTTING LOGIC ---
      // If mouse is very close and moving, we "cut"
      if (d < 35 && mouseV > 2) {
        endShape();
        beginShape();
        continue;
      }

      // --- Jitter) ---
      if (friction > 0.1) {
        x += random(-10, 10) * friction;
        y += random(-10, 10) * friction;
      }

      vertex(x, y);
    }
    endShape();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.7);
}
