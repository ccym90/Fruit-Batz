p1 = {
    posX = 10;
    posY = 90;
    speed = 0;
    width = 30;
    height = 30;
}

function render(){

  
  if(keyLEFT || motion.left){
    x -= speed;
  }
  
  if(keyRIGHT || motion.right){
    x += speed;
  }
  
  edgeDetect();
  
  p1.style.top = y;
  p1.style.left = x;
}*/