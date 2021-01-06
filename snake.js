class Snake{
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.cell = 30;
        this.dx = this.cell;
        this.dy = 0;
        this.maxCell = [];
        this.minCells = 1;
        this.point = 0;
    }

    // Hàm lặp đối tượng Snake khi di chuyển;
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

        // tạo phần tử đầu tiên vào mảng;
        this.maxCell.unshift({
                                 x: this.x,
                                 y: this.y
        });

        // cắt đuôi khi rắn di chuyển;
        if(this.maxCell.length > this.minCells){
            this.maxCell.pop();
        }

        this.direction();

    }

    // Hàm vẽ tạo đối tượng Snake;
    draw() {
        for(let i = 0; i < this.maxCell.length; i++){
            this.game.context.fillStyle = ( i == 0 )? "red" : "yellow";
            this.game.context.fillRect(this.maxCell[i].x, this.maxCell[i].y, this.cell, this.cell);
        }
    }

    // Hàm sự kiện điều hướng di chuyển đối tượng Snake;
    direction() {
        document.addEventListener('keydown', (e) => {
            if(e.which == 37 && this.dx == 0){
                this.dx = -this.cell;
                this.dy = 0;
            }

            else if(e.which == 38 && this.dy == 0){
                this.dx = 0;
                this.dy = -this.cell;
            }

            else if(e.which == 39 && this.dx == 0){
                this.dx = this.cell;
                this.dy = 0;
            }

            else if(e.which == 40 && this.dy == 0){
                this.dx = 0;
                this.dy = this.cell;
            }
        });
    }

    // Hàm tăng độ dài đối tượng Snake khi ăn đối tượng Food;
    eat(x, y) {
        if(this.x == x && this.y == y){
            this.minCells++;
            this.point += 1;
            document.getElementById("point").value = this.point;
            return true;
        }
        return false;
    }

    // Hàm check trạng thái của đối tượng Snake;
    endGame(){
        for(let i = 1; i < this.maxCell.length; i++) {
            if (this.x == this.maxCell[i].x && this.y == this.maxCell[i].y) {
                return false;
            }
        }
        return true;
    }
}



