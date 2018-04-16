var circleX = 100;
var circleY = 100;
var speedX = 5;
var speedY = 3;
var circleSize = 50;

function setup() { 
  createCanvas(800, 500);
} 

function draw() {
	background(200);
	fill("red");
  ellipse(circleX,circleY, circleSize,circleSize);
	circleX = circleX + speedX;
	circleY += speedY;
	// circleSize += 1;
	//same as circleY = circleY + speed;
	//width and height are p5 variables for the width and height of the canvas
	if((circleX + circleSize/2)  >= width || (circleX - circleSize/2) <= 0){
		speedX = speedX * -1;
	}
	if((circleY + circleSize/2) >= height || (circleY - circleSize/2) <= 0){
		speedY = speedY * -1;
	}
}