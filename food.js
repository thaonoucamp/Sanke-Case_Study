class Food {
    constructor(width, height, x, y,canvas) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.canvas = canvas;
    }
        draw() {
            this.canvas.beginPath();
            this.canvas.fillStyle = "#000000";
            this.canvas.fillRect(this.x, this.y, this.width, this.height);
        }
}