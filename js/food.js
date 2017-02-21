var Food = function(type){


    var position = {
        x: 0,
        y: 0
    };

    var foodElement = null;

    // this will run at every frame
    this.render = function(gravity){

        position.y += gravity;
        foodElement.style.top = position.y + "px";
    }

    // This will only run once
    function init(){
        foodElement = document.createElement("div");
        foodElement.classList.add("food");
        foodElement.classList.add(type);

        position.x = parseInt(Math.random() * window.innerWidth);
        foodElement.style.top = position.y + "px";
        foodElement.style.left = position.x + "px";

        var gameBoard = document.getElementById("gameboard");
        gameBoard.appendChild(foodElement);
    }

    init();

}