var player1= document.getElementById('p1');

var p1left = 0;

document.addEventListener('keydown', function(e) {
    console.log('keypressed');                      
     switch(e.keyCode){
        case 37:
            p1left -=15;
            p1.style.left = p1left + 'px';
            break;
        case 39:
            p1left +=15;
            p1.style.left = p1left + 'px';
            break;
        default:
    }
});

var player1RightSide = player.x + player.width;

if( player1RightSide >= 200 );

if( player1RightSide >= 200 ) { player.x = 190; } 

