var GameBoard = function(){

    /*
     *  Game variables
     */

    var gravity = 2;

    /*
     *  Game Environment
     */
    this.frames = 0;
    this.player1 = new Player("player1");
    this.player2 = new Player("player2");

    var player1Points = 0;
    var player2Points = 0;

    this.foods = [];

    var self = this;

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
    this.dropFood = function(){

        if( !( self.frames%120 == 0) ){
            return;
        }

        this.foods.push(new Food());
    };




    ////////////////////////////////////////////////////////////////////////////////////////////////
    
    function collision() {

        var player1Co = document.getElementById('player1').getClientRects()[0];
        var player2Co = document.getElementById('player2').getClientRects()[0];

        self.foods.forEach(function(food, index) {

            if(food.foodElement.getClientRects().length == 0 ){
                return;
            }

            var foodRect = food.foodElement.getClientRects()[0];

            if(foodRect.left < player1Co.left + player1Co.width &&
                foodRect.left + player1Co.width > player1Co.left &&
                foodRect.top < player1Co.top + player1Co.height &&
                foodRect.height + foodRect.top > player1Co.top) {

                var foodEaten = food.eatFood();

                if(foodEaten.name == "coffee" ){
                    self.player1.speed += foodEaten.powerup;
                    console.log("Player 1: Yay coffee");
                }else{
                    player1Points += foodEaten.points;
                }
                self.foods.splice(index,1);

                console.log("Player 1 got the" + foodEaten.name);
                console.log(player1Points);

            }


            if(foodRect.left < player2Co.left + player2Co.width &&
                foodRect.left + player2Co.width > player2Co.left &&
                foodRect.top < player2Co.top + player2Co.height &&
                foodRect.height + foodRect.top > player2Co.top) {

                var foodEaten = food.eatFood();

                if(foodEaten.name == "coffee" ){
                    self.player2.speed += foodEaten.powerup;
                    console.log("Player 2: Yay coffee");
                }else{
                    player2Points += foodEaten.points;
                }
                self.foods.splice(index,1);

                console.log("Player 2 got the" + foodEaten.name);
                console.log(player2Points);
            }

        });
    }
    

////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function render(){

        self.frames++;

        self.player1.render(movement);
        self.player2.render(movement);

        self.foods.forEach(function(food, index) {
           food.render(gravity);

           if( food.edgeDetection() ){
               self.foods.slice(index,1);
           }
        });

        self.dropFood();
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