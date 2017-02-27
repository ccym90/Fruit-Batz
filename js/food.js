var Food = function(type){

/////////////////////////////////////////put foods into array) of objects assigning points and power up///////////////////////////
/////////////////////////////////////////this allows engine to choose random fruit to fall////////////////////////////
    var foodTypes = [
                        {"name":"pineapple", "points": 5},
                        {"name":"pizza", "powerup":-3},
                        {"name":"doughnut", "points":6},
                        {"name":"strawberry", "points": 4},
                        {"name":"cherry", "points": 3},
                        {"name":"grapes", "points": 1},
                        {"name":"raspberry", "points": 2},
                        {"name": "coffee", "powerup":6}
                    ];

    this.currentFoodType = null; /// this. making scope global 

    var position = {
        x: 0,
        y: -5,      //// makes food fall from above the screen window
    };

    this.foodElement = null; //null because it is defined later
    
    var self = this;  //bind the "this" to refer to food

    this.foodGravity = Math.ceil(Math.random() * 5); 
    // gravity chosen at random number rounded up using math.ceil - if floor used potentaily choose 0 so wont fall

    
    /*
     * eat the food - remove the html "div" on collision make food disappear
     */
    
    this.eatFood = function () {
        self.foodElement.remove();
        return this.currentFoodType;
    }


    /*
     * If the food falls below the screen inner Height, the html element will be removed 
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

        self.currentFoodType = foodTypes[Math.floor(Math.random()*foodTypes.length)]; //chosing a random food from the above array

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
