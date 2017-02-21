var player2= document.getElementById('p2');

var p2left = 0;

document.addEventListener('keydown', function(e) {
    console.log('keypressed');                      
     switch(e.keyCode){
        case 65:
            p2left -=15;
            p2.style.left = p2left + 'px';
            break;
        case 68:
            p2left +=15;
            p2.style.left = p2left + 'px';
            break;
        default:
    }
});