class Game{
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 600;
        document.body.appendChild(this.canvas);
        this.snake = new Snake(this);
        this.food = new Food(this);
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 100);
    }

    update() {
        this.snake.update();
        if(this.snake.eat(this.food.x, this.food.y)){
            this.food.update();
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.food.draw();
    }
    checkPoint() {
        if (this.snake.endGame()) {
            alert("T O A N G !!!"+" Diem cua chu day : "+ this.snake.point);
        }
    }
}

