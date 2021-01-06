class Food{
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.cell = 30;
        this.update();
    }

    update() {
        this.x = (Math.floor(Math.random()* (19 - 0)) + 0)*this.cell;
        this.y = (Math.floor(Math.random()* (19 - 0)) + 0)*this.cell;
    }

    draw() {
        this.game.context.fillStyle = 'green';
        this.game.context.fillRect(this.x, this.y, this.cell, this.cell);
    }
}