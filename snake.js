class Snake {
    constructor(x,y,width,height,canvas) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.canvas = canvas;
        }
    draw() {
        this.canvas.beginPath();
        this.canvas.fillStyle = "#ff0000";
        this.canvas.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {

    }
    moveUp() {
        this.direction = "up";
        this.y = this.y - 30;
        if (this.y === -30) {
            this.y = 570;
        }
    }
    moveDown() {
        this.direction = "down";
        this.y = this.y + 30;
        if (this.y === 600) {
            this.y = 0;
        }
    }
    moveLeft() {
        this.direction = "left";
        this.x = this.x - 30;
        if (this.x === -30) {
            this.x = 570;
        }
    }
    moveRight() {
        this.direction = "right";
        this.x = this.x + 30;
        if (this.x === 600) {
            this.x = 0;
        }
    }
}
