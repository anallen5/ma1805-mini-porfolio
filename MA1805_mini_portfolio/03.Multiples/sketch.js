let i = 0;
let x = 5;
let y = 0;
let select = 0;
//variables necessary for animated text

// Binary does not show up in an easy-to-decipher way on the canvas display, deeming its meaning a mystery at surface level. 
const textList = " 01001110 01100101 01110110 01100101 01110010 00100000 01000111 01101111 01101110 01101110 01100001 00100000 01000111 01101001 01110110 01100101 00100000 01011001 01101111 01110101 00100000 01010101 01110000";
const textArray = textList.split(""); // "List" of individual characters

function setup(){
	createCanvas(windowWidth, windowHeight); 
  background(0);
  frameRate(60); // fps
}

function draw(){
while (y<windowHeight) {
  if (i < textArray.length) { // if i is less than no. of characters in array.
    fill(random(0, 50), random(40, 255), random(0, 0)) //random shades of green
    stroke(100);
    console.log(i);
    textSize(17);
    textFont("Courier");
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); //text set at custom size, height, font, and alignment.

    i++ // self-increasing/repeating
    y=y+11; // y placement is set at y=11 on canvas
    y++; // creates a new line after each character
  }else{
    i=0;
    y=0;
    x=x+8 // shifts each line of code to the right
  }
}
if (y>=windowHeight) {x=x+5; y=0; text(textArray[i], y, x);}
i=2;
y=0;
//next vertical line of binary
}

function mouseClicked(){
  background(0);
  i=0;
  y=0;
  x=0;
  //resets the array when clicked
}

