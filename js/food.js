var Food = function(type){

    var foodTypes = [
                        {"name":"pineapple", "points": 3},
                        {"name":"pizza", "points": 4},
                        {"name":"doughnut", "points": 5},
                        {"name":"strawberry", "points": 6},
                        {"name":"cherry", "points": 7},
                        {"name":"grapes", "points": 8},
                        {"name":"raspberry", "points": 9},
                        {"name": "coffee", "powerup":5}
                    ];

    this.currentFoodType = null;

    var position = {
        x: 0,
        y: -5
    };

    this.foodElement = null;
    
    var self = this;  //bind the "this" to refer to food


    this.foodGravity = Math.ceil(Math.random() * 3);

    /*
     * eat the food
     */
    this.eatFood = function () {
        self.foodElement.remove();
        return this.currentFoodType;
    }


    /*
     * If the food leaves the screen
     */
    this.edgeDetection = function() {

        if(position.y > window.innerHeight){
            self.foodElement.remove();
            return true;
        }

        return false;
    }


    // this will run at every frame
    this.render = function(gravity){
        position.y += self.foodGravity;
        self.foodElement.style.top = position.y + "px";
    };

    // This will only run once
    function init(){

        self.currentFoodType = foodTypes[Math.floor(Math.random()*foodTypes.length)];

        self.foodElement = document.createElement("div");
        self.foodElement.classList.add("food");
        self.foodElement.classList.add(self.currentFoodType.name);

        //parseInt as css reads integers not decimals
        position.x = parseInt(Math.random() * window.innerWidth);
        self.foodElement.style.top = position.y + "px";
        self.foodElement.style.left = position.x + "px";

        var gameBoard = document.getElementById("gameboard");
        gameBoard.appendChild(self.foodElement);
    }

    init();

};
