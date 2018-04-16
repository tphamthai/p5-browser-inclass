//in instance mode we create our whole p5 script as a single function
//the variable 'p' holds all our information, and also lets us access any p5 functions
var sketch = function(p){
    var circleX = 100;
    var circleY = 100;
    var speedX = 5;
    var speedY = 3;
    var circleSize = 50;
    
    //for any p5 specific functions, we need to put p. instead of just calling them normally
    p.setup = function() { 
      p.createCanvas(800, 500);
    } 

    p.draw =  function () {
        p.background(200);
        p.fill("red");
        p.ellipse(circleX,circleY, circleSize,circleSize); 
        circleX = circleX + speedX;
        circleY += speedY;
        // circleSize += 1;
        //same as circleY = circleY + speed;
        //width and height are p5 variables for the width and height of the canvas
        if((circleX + circleSize/2)  >= p.width || (circleX - circleSize/2) <= 0){
            speedX = speedX * -1;
        }
        if((circleY + circleSize/2) >= p.height || (circleY - circleSize/2) <= 0){
            speedY = speedY * -1;
        }
    }
}    
    
//these lines call an 'instance' of p5 using our sketch function, and then (optionally) saves it to a div in our html
var myp5 = new p5(sketch, "one");
var myp5_2 = new p5(sketch, "two");