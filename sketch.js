function preload() {
  redimg = loadImage("red.png");
  greenimg = loadImage("green.png");
  blueimg = loadImage("blue.png");
  yellowimg = loadImage("yellow.png");
  pinkimg = loadImage("pink.png");
  cyanimg = loadImage("cyan.png");
}
function setup() {
  createCanvas(800, 800);
  red = createSprite(150, 200, 100, 100);
  red.addImage("red", redimg);
  red.scale = 0.1;
  blue = createSprite(150, 400, 100, 100);
  blue.addImage("blue", blueimg);
  blue.scale = 0.1;
  green = createSprite(150, 600, 100, 100);
  green.addImage("green", greenimg);
  green.scale = 0.1;
  green2 = createSprite(400, 200, 100, 100);
  green2.addImage("green", greenimg);
  green2.scale = 0.1;
  red2 = createSprite(400, 400, 100, 100);
  red2.addImage("red", redimg);
  red2.scale = 0.1;
  blue2 = createSprite(400, 600, 100, 100);
  blue2.addImage("blue", blueimg);
  blue2.scale = 0.1;
  red.shapeColor = "red";
  red2.shapeColor = "red";
  blue.shapeColor = "blue";
  blue2.shapeColor = "blue";
  green.shapeColor = "green";
  green2.shapeColor = "green";
}
function draw() {
  background("white");
  drawSprites();
  textSize(25);
  text("Press R to mix red, B to mix blue & G to mix green", 50, 100);
  if (keyDown("r")) {
    red.x = red.x + 50;
    if (
      green2.x - red.x < red.width / 2 + green2.width / 2 &&
      red.x - green2.x < red.width / 2 + green2.width / 2
    ) {
      yellow = createSprite(600, 200, 100, 100);
      yellow.addImage("yellow", yellowimg);
      yellow.scale = 0.1;
      red.x = 350;
    }
  }
  if (keyDown("b")) {
    blue.x = blue.x + 50;
    if (
      blue.x - red2.x < red2.width / 2 + blue.width / 2 &&
      red2.x - blue.x < red2.width / 2 + blue.width / 2
    ) {
      pink = createSprite(600, 400, 100, 100);
      pink.addImage("pink", pinkimg);
      pink.scale = 0.1;
      blue.x = 350;
    }
  }
  if (keyDown("g")) {
    green.x = green.x + 50;
    if (
      blue2.x - green.x < green.width / 2 + blue2.width / 2 &&
      green.x - blue2.x < green.width / 2 + blue2.width / 2
    ) {
      cyan = createSprite(600, 600, 100, 100);
      cyan.addImage("cyan", cyanimg);
      cyan.scale = 0.1;
      green.x = 350;
    }
  }
}
