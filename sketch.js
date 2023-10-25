/**
 * Logo Animation
 * 
 * The logo keeps moving in a circular motion
 * The logo follows the mouse movement.
 * Click the mouse to switch the logo. 
 * 
 */

// logo
let logos = [];
let logoIndex;
let logoX;  // position
let logoY;
let logoA;  // angle
let orbitXR; // orbit radius
let orbitYR;
let centerX;
let centerY;
let changeNum = 0;

// cat
let catImg;
let eyeLeft, eyeRight;

// move
let accelX = 0, accelY = 0;
let damping = .05;
let timer = -1;

/** This function loads resources that will be used later. */
function preload() {
  for (let i = 0; i < 4; i++) {
    logos.push(loadImage("assets/logo" + i + ".png"));
  }

  catImg = loadImage("assets/cat.png")
}

function setup() {
  let m = min(windowWidth, windowHeight);
  createCanvas(m, m);
  imageMode(CENTER);

  let scaleVal = width / catImg.width;
  catImg.resize(width, catImg.height * scaleVal);
  for (let i = 0; i < logos.length; i++) {
    logos[i].resize(width / 6, width / 6);
  }

  // logo
  logoIndex = 0;
  orbitXR = width / 2.4;
  orbitYR = width / 4;
  logoA = -PI / 2;
  centerX = width / 2;
  centerY = height * 0.7;

  // eye
  eyeLeft = new CatEye( 0.27 * width, 0.78 * height, 0.07 * width, 0.04 * height);
  eyeRight = new CatEye( 0.73 * width, 0.78 * height, 0.07 * width, 0.04 * height);
}

function draw() {
  background(255);
  image(catImg, catImg.width / 2, height - catImg.height / 2);

  // draw logo
  if (mouseX == pmouseX && mouseY == pmouseY && timer < 0) {
    logoX = centerX + orbitXR * cos(logoA);
    logoY = centerY + orbitYR * sin(logoA);
    logoA -= 0.01;
  } else {
    moveWithMouse();
  }
  timer--;

  image(logos[logoIndex], logoX, logoY);

  // draw the eyes of a cat
  // same speed as logo turns around
  eyeLeft.move();
  eyeRight.move();
  noStroke();
  fill(0);
  ellipse(eyeLeft.x, eyeLeft.y, width * 0.034, height * 0.03);
  ellipse(eyeRight.x, eyeRight.y, width * 0.034, height * 0.03);

  if (floor(abs(logoA + PI / 2) / PI) - changeNum >= 1) {
    changeLogo();
    changeNum++;
  }

  // box
  noFill();
  stroke(0);
  strokeWeight(width / 80);
  rect(0, 0, width, height);
}

function mouseClicked() {
  changeLogo();
}

// change logo
function changeLogo() {
  logoIndex++;
  if (logoIndex >= logos.length) {
    logoIndex -= logos.length;
  }
}

function moveWithMouse() {
  if (timer < 0) {
    timer = 150;
  }
  // move
  let deltaX = mouseX - logoX;
  let deltaY = mouseY - logoY;

  // create springing effect
  deltaX *= damping;
  deltaY *= damping;

  // move logo
  logoX += deltaX;
  logoY += deltaY;

  logoA = createVector(logoX - centerX, logoY - centerY).heading();
  changeNum = floor(abs(logoA + PI / 2) / PI);
}

// class
class CatEye {
  constructor(_cx, _cy, _rx, _ry) {
    this.cx = _cx;
    this.cy = _cy;
    this.rx = _rx;
    this.ry = _ry;
    this.x = this.cx + this.rx * cos(logoA);
    this.y = this.cy + this.ry * sin(logoA);
  }
  

  move() {
    this.x = this.cx + this.rx * cos(logoA);
    this.y = this.cy + this.ry * sin(logoA);
  }
}
