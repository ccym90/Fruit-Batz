var p1Piece;

function startGame() {
    gameArea.start();
    p1Piece = new component (30, 30, "blue", 10, 120);
    
} 

function component (width, height, color, x, y) {
    this.width = width;
    this.height = height; 
    this.x = x;
    this.y = y;
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

