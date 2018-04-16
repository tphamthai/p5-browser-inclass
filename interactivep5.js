var sketch = function(p){
var song;
var button;
var amp;
var fft;
var w;


p.preload = function() {
	song = p.loadSound("island.mp3", p.loaded);
	
}

p.setup = function() {
		p.background("white");
	p.createCanvas(1200, 700);
	p.colorMode(p.HSB);
	button = p.createButton("play");
	button.position (10,10);
	button.mousePressed(p.togglePlaying);
	amp = new p.Amplitude();
    fft = new p.FFT(0.9,64);
	w = p.width/64;



}
p.loaded = function(){
	console.log("loaded");

}
p.togglePlaying = function(){
	if (!song.isPlaying()) {
		song.play();
		song.setVolume(0.25);
		button.html("pause");
	} else {
		song.pause();
		button.html("play");
	}
}
p.draw = function() {
	p.background(0);
	var spectrum = fft.analyze();
	p.console.log(spectrum);
p.stroke(255);
	for (var i = 0; i<spectrum.length ; i++) {
	var amp = spectrum[i];
	var y = p.map(amp, 0, 256, p.height, 0);
	p.fill(255,i,255);
	p.rect(i*w, y, w-9, p.height - y);
	// var x = map(i, 0, spectrum.length, 100, width -100);
	// var y = map(spectrum[i], 0, 255, height - 100, 100)
	// vertex(x, y);
		
	p.circle();
   }
}

p.circle = function(){
	p.beginShape();
	var vol = amp.getLevel();
	var diam = p.map(vol, 0, 0.3, 10,200);
	p.noStroke();
  p.ellipse(1100, 135, diam, diam);
  p.ellipse(1110, 170, diam, diam); 
  p.ellipse(1125, 120, diam, diam);
  p.ellipse(1140, 170, diam, diam);
  p.ellipse(1150, 135, diam, diam);
  //2nd center of flower
  p.fill(57, 70,92);
  p.ellipse(1125, 140, diam, diam);
	p.endShape();
	
//   spectacles
	p.fill(p.random(255),p.random(255),p.random(255));
	this.x = p.random(0, p.width);
  this.y = p.random(0, p.height);
  p.ellipse(this.x, this.y, 10, 10);
}
}   
//var sketch2 = function(p){
//var ball;
//var xpos;
//var ypos;
//var song;
//
//function setup() {
//	createCanvas(windowWidth, windowHeight);
//	ball = new Ball();
//	noStroke();
//	song = loadSound("buzz.mp3");
//
//}
//
//function draw() {
//	background("black");
//	ball.move();
//	ball.checkCollisions();
//	ball.checkCollisions2();
//	ball.checkCollisions3();
//	ball.display();
//	
//	if(ball.y > height){
//		fill("white");
//		textAlign(CENTER);
//    textFont("Open Sans");
//  	textStyle(BOLD);
//    text("GAME OVER", width / 2, height / 2);
//	}
//
//	
//// stay in the canvas	
//if (mouseX >= 0 && mouseX <= width - 100) {
//    xpos = mouseX;
//  } else if (mouseX > width - 100) {
//    xpos = width - 100;
//	}
//	rect(xpos, height - 2.5, 100, 100);
//
//
//	
//}
//
//
//function Ball() {
//	this.x = width/2;
//	this.y = height/2;
//	this.speed = {x: random(-5,5), y: 5};
//	this.size = 50;
//	
//	this.display = function(){
//		ellipse(this.x, this.y, this.size, this.size)
//	}
//	
//	this.move = function(){
//		this.x += this.speed.x;
//		this.y -= this.speed.y;
//	}
//// 	bounce off the sides	
//	this.checkCollisions = function(){
//		var hitLeftOrRight = this.x < 0 || this.x > width
//		if(hitLeftOrRight){
//			this.speed.x *= -1;
//		}		
//	}
//// 	bounce off the top wall
//	this.checkCollisions2 = function(){
//		var hitTop = this.y < 0 
//		if(hitTop){
//			this.speed.y *= -1;
//		}	
//	}
//// // bounce off the paddle
//// 	// //collideRectCircle(x, y, width, height, x2, y2, diameter)
//	this.checkCollisions3 = function(){
//		var hitRect = collideRectCircle(mouseX, height - 2.5, 100, 100, this.x, this.y, this.size)
//		if(hitRect){
//			this.speed.y *= -1.2; //increases the speed after each hit
//			song.play();
//	 } 
//	}
//}
//
//
//function mousePressed() {
//  fill(random(255), random(255), random(255));
//}    
//}
var myP5 = new p5(sketch,"one");
//var myP52 = new p5(sketch2);
