function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); //black background
  textSize(15); 
  textStyle(BOLDITALIC);
  fill(0, 180, 255);
  text("You feel the droplets on your skin... it fills you with a certain power.", 100, 100);
  //the above text appears at size 15, bold/italic, in a shade of blue/green, at the coordinates given
  frameRate(20); //relatively quick fps
}

function draw() {
  let x1 = random(width, 1, 2);
  let y1 = random(height, 1, 2); //randomized height/width between 1 and 2; however, the circles aren't affected by this value the way an ellipse or rectangle might be.
   fill(random(0, 20), random(0, 0), random(50, 150)); //random blue shades
  circle(x1, y1, random(1, 30));
  circle(x1, y1, 20);
  circle(x1, y1, 15);
  circle(x1, y1, 10);
  circle(x1, y1, 7);
  circle(x1, y1, 4);
  //overlapping circles, the "raindrops"
}

function mouseClicked() {  
  background(0); //mouse click resets the raindrops
  textSize(20);
  textStyle(BOLDITALIC);
  fill(0, 150, 255);
  text("It's Raining Somewhere Else...", 100, 100);
  //a new text is displayed after the first click, slightly different in appearance
}