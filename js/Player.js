var Player = function(playerNumber){


    /*
     *  Game variables
     */
    var speed = 10;

    /*
     *  Game Environment
     */
    var player = playerNumber;
    var position = {
        "x": 100
    };
    
    var self = this;
    
    this.playerElement = document.getElementById(player);


    if(player == "player1"){
        position.x = window.innerWidth - 100;
    }

    if(player == "player2"){
        position.x = 100;
    }

    function move(movement){

        if(movement[player].left){
            position.x -= speed;
        }

        if(movement[player].right){
            position.x += speed;
        }

        if(position.x < 0){
            position.x = window.innerWidth;
        }

        if(position.x > window.innerWidth ){
            position.x = 0;
        }

    }

    this.render = function(movement) {

        move(movement);
        self.playerElement.style.left = position.x + "px";

    }
}