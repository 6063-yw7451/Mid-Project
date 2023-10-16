// logo
let logoA;  // angle

// cat
let catImg;
let eyeLeft, eyeRight;

/** This function loads resources that will be used later. */
function preload() {
  catImg = loadImage("assets/cat.png")
}

function setup() {
  let m = min(windowWidth, windowHeight);
  createCanvas(m, m);
  imageMode(CENTER);

  let scaleVal = width / catImg.width;
  catImg.resize(width, catImg.height * scaleVal);
  logoA = -PI / 2;

  // eye
  eyeLeft = new CatEye(0, 0, 0.27 * width, 0.78 * height, 0.07 * width, 0.04 * height);
  eyeRight = new CatEye(0, 0, 0.73 * width, 0.78 * height, 0.07 * width, 0.04 * height);
}

function draw() {
  background(255);
  image(catImg, catImg.width / 2, height - catImg.height / 2);
  logoA -= 0.01;

  // draw the eyes of a cat
  // same speed as logo turns around
  eyeLeft.move();
  eyeRight.move();
  noStroke();
  fill(0);
  ellipse(eyeLeft.x, eyeLeft.y, width * 0.034, height * 0.03);
  ellipse(eyeRight.x, eyeRight.y, width * 0.034, height * 0.03);

  // box
  noFill();
  stroke(0);
  strokeWeight(width / 80);
  rect(0, 0, width, height);
}

// class
class CatEye {
  constructor(_x, _y, _cx, _cy, _rx, _ry) {
    this.x = _x;
    this.y = _y;
    this.cx = _cx;
    this.cy = _cy;
    this.rx = _rx;
    this.ry = _ry;
  }

  move() {
    this.x = this.cx + this.rx * cos(logoA);
    this.y = this.cy + this.ry * sin(logoA);
  }
}
