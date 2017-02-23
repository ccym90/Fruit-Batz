var Food = function(type){


    var position = {
        x: 0,
        y: -5
    };

    var foodElement = null;
    
    var self = this;  //bind the "this" to refer to food

    // this will run at every frame
    this.render = function(gravity){
//        console.log(position.x, position.y);
        position.y += gravity;
        self.foodElement.style.top = position.y + "px";
    }

    // This will only run once
    function init(){
        self.foodElement = document.createElement("div");
        self.foodElement.classList.add("food");
        self.foodElement.classList.add(type);
                //parseInt as css reads integers not decimals
        position.x = parseInt(Math.random() * window.innerWidth); 
        self.foodElement.style.top = position.y + "px";
        self.foodElement.style.left = position.x + "px";

        var gameBoard = document.getElementById("gameboard");
        gameBoard.appendChild(self.foodElement);
    }

    init();

}

    var food = new Food("pineapple");
    var food1 = new Food("pizza");
    var food2 = new Food("doughnut");
    var food3 = new Food("strawberry");
    var food4 = new Food("cherry");
    var food5 = new Food("grapes");
    var food6 = new Food("raspberry");
    var food7 = new Food("coffee");

    var foods = ["food", "food1", "food2", "food3", "food4", "food5", "food6", "food7"];

