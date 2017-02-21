var GameBoard = function(){

    /*
     *  Game variables
     */

    var gravity = 1;

    /*
     *  Game Environment
     */
    var height = window.innerHeight;
    var width = window.innerWidth;

    var player1 = new Player("player1");
    var player2 = new Player("player2");

    var foods = [];

    var food = new Food("banana");

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
            case 37:
                movement.player1.left = false;
                break;
            case 39:
                movement.player1.right = false;
                break;
            case 65:
                movement.player2.left = false;
                break;
            case 68:
                movement.player2.right = false;
                break;
            default:
        }
    });

    function render(){
        console.log("game loop");

        player1.render(movement);
        player2.render(movement);

        food.render(gravity);
    }

    function animloop(){
        requestAnimFrame(animloop);
        render();
    }
    animloop();
}



window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();




var gameBoard = new GameBoard();