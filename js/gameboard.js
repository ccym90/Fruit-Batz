    var player1 = new Player("player1");
    var player2 = new Player("player2");

var GameBoard = function(){

    /*
     *  Game variables
     */

    var gravity = 2;
    
    
    /*
     *  set the intial foods position to above screen height
     */
    var y = window.innerHeight / -10;
    

    /*
     *  Game Environment
     */
    var height = window.innerHeight;
    var width = window.innerWidth;

    player1 = new Player("player1");
    player2 = new Player("player2");
    
    document.getElementsByName("foods")
    
    
debugger;

    /*
     *  Event listeners
     */
    var movement = {
        "player1":{
            "left": false,
            "right": false
        },
        "player2":{
            "left": false,
            "right": false
        }
    };

    /*
     * Event listeners
     */
    document.addEventListener('keydown', function(e) {

        switch(e.keyCode){
            case 37:
                movement.player1.left = true;
                break;
            case 39:
                movement.player1.right = true;
                break;
            case 65:
                movement.player2.left = true;
                break;
            case 68:
                movement.player2.right = true;
                break;
            default:
        }
    });

    document.addEventListener('keyup', function(e) {
        switch(e.keyCode){
            case 37: //left key
                movement.player1.left = false;
                break;
            case 39:  //right key
                movement.player1.right = false;
                break;
            case 65: //a key
                movement.player2.left = false;
                break;
            case 68: //d key
                movement.player2.right = false;
                break;
            default:
        }
    });
    
    ////////////////////////////////////////////////////////////////////////////////////////////////
    
        function collision() { 
            
          // Are all elements availible ?
      if(!(food.foodElement && player1.playerElement)){
        return;
      }
      // Find elements 
      var foodCo = food.foodElement.getClientRects()[0];
      var player1Co = document.getElementById('player1').getClientRects()[0];
    
            
        // Calculate if there a collision
      if(foodCo.left < player1Co.left + player1Co.width &&
         foodCo.left + player1Co.width > player1Co.left &&
         foodCo.top < player1Co.top + player1Co.height &&
         foodCo.height + foodCo.top > player1Co.top) {

         console.log("collision detected");    
      }
            
    if(!(food.foodElement && player2.playerElement)){
        return;
    }
    
          // Find elements 
      var foodCo = food.foodElement.getClientRects()[0];
      var player2Co = document.getElementById('player2').getClientRects()[0];
    
            
        // Calculate if there a collision
      if(foodCo.left < player2Co.left + player2Co.width &&
         foodCo.left + player2Co.width > player2Co.left &&
         foodCo.top < player2Co.top + player2Co.height &&
         foodCo.height + foodCo.top > player2Co.top) {

         console.log("collision detected2");    
            }
        }
    

////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function render(){
        console.log("game loop");

        player1.render(movement);
        player2.render(movement);

          foods.render(gravity);
//        food1.render(gravity);
//        food2.render(gravity);
//        food3.render(gravity);
//        food4.render(gravity);
//        food5.render(gravity);
//        food6.render(gravity);
//        food7.render(gravity);
    
        
        
        collision();
    }

        

    function animloop(){
        requestAnimFrame(animloop);
        render();
    };
    animloop();

}
window.requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


var gameBoard = new GameBoard();

///*
// * music play on click to play and image disappear
// */
//$('#startbutton').click(function(hide) {
//     $( this ).slideUp();
//    var audio = document.getElementById("audio");
//       audio.play()
//});