//The setup function only happens once
var diam1=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
   background(73, 73, 73);
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  fill(137, 137, 137);
  stroke(180, 19, 227);
  noStroke(0);
  rect(random(125,375),random(75,250),20,20);
  fill(355);
  textFont('ComicSansMS');
  textSize(30);
  textStyle(ITALIC);
  text('BL0CK HEAD B)',250,250)
  fill(137, 137, 137);
  noStroke(0);
  rect(random(175,325),random(100,50),20,20);
  fill(137, 137, 137);
  noStroke(0);
  rect(random(150,350),random(325,200),20,20);
  fill(137, 137, 137);
  noStroke(0);
  rect(random(180,325),random(325,400),20,20);
  fill(137, 137, 137);
  noStroke(0);
  rect(random(225,285),random(375,425),20,20);
  fill(77, 77, 77);
  noStroke(0);
  rect(width/3, height/2.5,80,20);
  fill(77, 77, 77);
  noStroke(0);
  rect(width-225, height/2.5,80,20);
  

}

function mousePressed(){
  if (diam1>=100){
    diam1=0;

  }else{
   diam1=diam1+25;
  }
}
