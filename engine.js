console.log("Game Engine");

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var keyUP = false;
var keyDOWN = false;
var keyLEFT = false;
var keyRIGHT = false;

var motion = {
  up:false,
  down:true,
  left: false,
  right: true,
}

// Initial position ball
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var speed = 20;

// Set ball position
var ball = document.getElementById("ball");
ball.style.top = y;
ball.style.left = x;

// Viewport
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;

document.addEventListener('keydown', function(e) {  
  
  switch(e.keyCode){
    case 38:
      keyUP = true;
      break;
    case 40:
      keyDOWN = true;
      break;
    case 37:
      keyLEFT = true;
      break;
    case 39:
      keyRIGHT = true;
      break;
    default:
  }
});

document.addEventListener('keyup', function(e) {  
  
  switch(e.keyCode){
    case 38:
      keyUP = false;
      break;
    case 40:
      keyDOWN = false;
      break;
    case 37:
      keyLEFT = false;
      break;
    case 39:
      keyRIGHT = false;
      break;
    default:
  }
  
});


function edgeDetect(HTMLCanvasElement){
  
    if(y <= 50){
      y = 50;
    }
    
    if(y >= (screenHeight-50)){
      y = screenHeight-50;
    }
  
    if(x <= 50){
      x = 50;
    }
  
    if(x >= (screenWidth-50)){
      x = screenWidth-50;
    }
}


function autoBounce(){
 
    // Ceiling
    if(y <= 50 ){
      motion.up = false;
      motion.down = true;
    }
    
    // Floor
    if(y >= (screenHeight-50)){
      motion.up = true;
      motion.down = false;
    }
  
    // Left wall
    if(x <= 50){
      motion.right = true;
      motion.left = false;
    }
  
    // Right wall
    if(x >= (screenWidth-50)){
      motion.left = true;
      motion.right = false;
    }
}

function render(){
  
  if(keyUP || motion.up){
    y -= speed;
  }
  
  if(keyDOWN || motion.down){
    y += speed;
  }
  
  if(keyLEFT || motion.left){
    x -= speed;
  }
  
  if(keyRIGHT || motion.right){
    x += speed;
  }
  
  autoBounce();
  edgeDetect();
  
  ball.style.top = y;
  ball.style.left = x;
}

(function animloop(){
  requestAnimFrame(animloop);
  render();
})();