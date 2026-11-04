//used "Copy Image Data" example from p5.js
//after trial and error, used post-2023 version of code to run the function properly.
let bottomImg, topImg;

function preload() {
    bottomImg = loadImage("/assets/bframe.png");
    topImg = loadImage("/assets/frame.png");
    //loads two images from assets
    //both images are separate frames of a GIF-- the copy function didn't work with the gif file type.
    //original GIF can be found in the assets folder, though it is not linked to the code anymore. 
    bottomImg.resize(900, 900);
    topImg.resize(900, 900);
    //ideally, the images would be windowWidth and Height, but doing so removes parts of the image necessary for the intended effect.
  }

function setup() {
  createCanvas(900, 900);
  image(topImg, 0, 0);
  //only the "topImg" is displayed.
}


function mouseDragged() {
  copy(bottomImg, mouseX, mouseY, 100, 100, mouseX, mouseY, 100, 100);
}
//click-and-dragging the mouse across the canvas copies 100x100px sections of the bottomImg onto the canvas.
