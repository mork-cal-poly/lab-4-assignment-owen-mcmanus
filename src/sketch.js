let runAnimation = false;
let fishX = 200;
let fishY = 60;
let turtleX = 0;
let turtleS = 1;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  drawBackground();
  drawFish(fishX, fishY);
  drawTurtle(turtleX, 0, turtleS, "#83ff91", "#7575ff");
  updateAnimalPos();
}

function mouseClicked() {
  if (mouseX < 260 && mouseX > 90 && mouseY < 156 && mouseY > 63)
    runAnimation = true;
}

function updateAnimalPos() {
  if (runAnimation) {
    fishX += 4;
    fishY += 1.5;
  }
  if (fishX > 500) {
    turtleX += 8;
    turtleS += 0.05;
  }
}

function drawFish() {
  push();
  noStroke();
  rotate(PI / 10);
  translate(fishX, fishY);
  fill(255, 124, 43);

  //body/tail
  ellipse(0, 0, 180, 75);
  triangle(-50, 0, -110, 60, -110, -60);

  fill(196, 97, 35);
  quad(-105, 48, -105, -48, -73, -15, -73, 15);

  // eyes
  circle(70, -5, 15);
  circle(55, -5, 15);
  fill(255);
  circle(70, -5, 10);
  circle(55, -5, 10);
  fill(0);
  circle(70, -5, 7);
  circle(55, -5, 7);

  // gills
  stroke(196, 97, 35);
  strokeWeight(3);
  line(25, -10, 25, 10);
  line(30, -10, 30, 10);
  line(35, -10, 35, 10);

  // tail lines
  stroke(188, 196, 24);
  strokeWeight(2);
  line(-105, 40, -73, 10);
  line(-105, 20, -73, 5);
  line(-105, 0, -73, 0);
  line(-105, -20, -73, -5);
  line(-105, -40, -73, -10);

  //mouth
  stroke("black");
  line(60, 15, 75, 10);
  pop();
}

function drawTurtle(x, y, s, shellColor, eyeColor) {
  push();
  scale(s);
  translate(x / s, y / s);
  noStroke();

  translate(100 / s, 380 / s);

  //feet
  fill("#754C2E");
  circle(-70, -20, 30);
  circle(50, -20, 30);

  fill("#A86C42");
  circle(-60, -20, 30);
  circle(60, -20, 30);

  //toes
  fill("black");
  circle(-49, -20, 6);
  circle(-52, -12, 6);
  circle(-59, -8, 6);

  circle(71, -20, 6);
  circle(68, -12, 6);
  circle(61, -8, 6);

  //neck
  push();
  fill("#73F56C");
  translate(60, -65);
  rotate(-PI / 4);
  rect(0, 0, 40, 15);
  pop();

  //shell
  fill("#3FA839");
  ellipse(0, -30, 80, 15);
  quad(-90, -30, 90, -30, 50, -80, -50, -80);

  //plates
  fill(shellColor);
  quad(-80, -35, -50, -35, -15, -75, -45, -75);
  quad(80, -35, 50, -35, 15, -75, 45, -75);
  quad(-5, -75, -40, -35, 40, -35, 5, -75);

  //head
  fill("#73F56C");
  rect(85, -100, 45, 35, 10);
  push();
  //face
  fill(eyeColor);
  circle(100, -90, 10);
  circle(117, -90, 10);
  stroke("black");
  line(110, -75, 120, -75);
  pop();

  //pupils
  circle(100, -91, 3);
  circle(117, -91, 3);
  pop();
}

function drawBackground() {
  background(78, 162, 222);
  drawBackgroundLines();
  drawGround();
}

function drawBackgroundLines() {
  stroke(175, 213, 240);
  line(200, 0, 400, 300);
  line(200, 0, 0, 300);
  line(200, 0, 0, 200);
  line(200, 0, 400, 200);
  line(200, 0, 400, 400);
  line(200, 0, 0, 400);
  line(200, 0, 100, 400);
  line(200, 0, 300, 400);
  line(200, 0, 200, 400);
}

function drawGround() {
  noStroke();
  fill(181, 145, 94); // sand
  rect(0, 350, 400, 50);

  fill(255, 127, 80); // orange coral
  rect(100, 310, 10, 50);
  rect(112, 325, 6, 35);
  rect(93, 335, 4, 25);

  fill(153, 72, 232); // purple coral
  rect(250, 315, 10, 45);
  rect(262, 345, 6, 15);
  rect(243, 325, 4, 35);

  fill(117, 94, 61); // craters
  circle(340, 370, 20);
  circle(140, 380, 15);
  circle(60, 375, 22);
}
