let x, y, d;
let xDir, yDir;
let x2, y2, d2;
let xDir2, yDir2;
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 0;
  y = height / 2;
  d = 50;
  xDir = 3;
  yDir = -2;

  x2 = width / 2;
  y2 = 100;
  d2 = 80;
  xDir2 = -2;
  yDir2 = 4;

  r = 255;
  g = 0;
  b = 0;
}

function draw() {
  background(0, 10);

  fill(r, g, b);
  circle(x, y, d);

  fill(0, 120, 255);
  circle(x2, y2, d2);

  x += xDir;
  y += yDir;
  x2 += xDir2;
  y2 += yDir2;

  if (x > width || x < 0) {
    xDir = -xDir;
    r = random(255);
    g = random(255);
    b = random(255);
  }
  if (y > height || y < 0) {
    yDir = -yDir;
    r = random(255);
    g = random(255);
    b = random(255);
  }

  if (x2 > width || x2 < 0) {
    xDir2 = -xDir2;
  }
  if (y2 > height || y2 < 0) {
    yDir2 = -yDir2;
  }
}
