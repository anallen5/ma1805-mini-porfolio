function setup() {
  createCanvas(500, 500);
  background(49, 69, 158);
}

function draw() {
strokeWeight(2);
fill (250, 246, 75); //yellow shade for entire emoji
circle(260, 270, 330);

//(x1, y1, x2, y2)
strokeWeight(5);
line (160, 215, 210, 215);
line (270, 215, 320, 215);
//the Eyes.

//x, y, width, height
strokeWeight(2);
ellipse(230, 410, 49, 120);
//the above is the back of the left-side palm.
ellipse(240, 360, 20, 200);
ellipse(230, 360, 20, 195);
ellipse(220, 370, 20, 170);
//fingers left side.
strokeWeight(0);
ellipse (230, 420, 45, 100);
//palm interior

strokeWeight(2);
ellipse (263, 379, 25, 155);
ellipse (253, 360, 20, 200);
ellipse (248, 357, 20, 200);
ellipse (243, 360, 20, 195);
ellipse (238, 370, 20, 170);
//fingers right side.

strokeWeight(0)
ellipse (259, 410, 49, 120);
//right palm
strokeWeight(2);
line(248, 354, 247, 363);
line(253, 350, 252, 360);
line(258, 350, 257, 360);
line(263, 350, 262, 369);
//knuckles
line(235, 450, 256, 470);
line(256, 470, 264, 470);
line(264, 470, 278, 450);
line(278, 450, 282, 410);
line(282, 410, 274, 360);
//the lines that roughly define the hand.

}
