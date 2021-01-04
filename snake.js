class Snake{
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.grid = 30;
        this.dx = this.grid;
        this.dy = 0;
        this.cell = [];
        this.maxCells = 1;
        this.point = 0;
    }

    update() {
        if(this.endGame()){
            this.x += this.dx;
            this.y += this.dy;
        }

        if(this.x >= this.game.canvas.width){
            // this.x = 0;
            this.game.endGame();
        }

        else if(this.x < 0){
            // this.x = this.game.canvas.width;
            this.game.endGame();
        }

        if(this.y >= this.game.canvas.height){
            this.game.endGame();
            // this.y = 0;
        }

        else if(this.y < 0){
            // this.y = this.game.canvas.height;
            this.game.endGame();
        }

        // Hàm cắt đuôi khi rắn di chuyển;
        this.cell.unshift({
                                 x: this.x,
                                 y: this.y
        });
        if(this.cell.length > this.maxCells){
            this.cell.pop();
        }
        this.direction();

    }

    draw() {
        for(let i = 0; i < this.cell.length; i++){
            this.game.context.fillStyle = ( i == 0 )? "red" : "white";
            this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
        }

        if(!this.endGame()) {
            this.endGame();
        }
    }

    direction() {
        document.addEventListener('keydown', (e) => {
            if(e.which == 37 && this.dx == 0){
                this.dx = -this.grid;
                this.dy = 0;
            }

            else if(e.which == 38 && this.dy == 0){
                this.dx = 0;
                this.dy = -this.grid;
            }

            else if(e.which == 39 && this.dx == 0){
                this.dx = this.grid;
                this.dy = 0;
            }

            else if(e.which == 40 && this.dy == 0){
                this.dx = 0;
                this.dy = this.grid;
            }
        });
    }

    eat(x, y) {
        if(this.x == x && this.y == y){
            this.maxCells++;
            this.point += 1;
            return true;
        }
        return false;
    }

    endGame(){
        for(let i = 1; i < this.cell.length; i++){
            if(this.cell[0].x == this.cell[i].x && this.cell[0].y == this.cell[i].y){
                return false;
            }
        }
        return true;
    }
}