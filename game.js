class Game{
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }

    // Hàm khởi tạo đối tượng Canvas, Snake, Food;
    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 600;
        document.body.appendChild(this.canvas);
        this.snake = new Snake(this);
        this.food = new Food(this);
    }

    // Hàm vẽ l đối tượng Snake để di chuyển;
    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 80);
    }

    // Hàm cộng thêm độ dài của đối tượng sau khi ăn;
    update() {
        this.snake.update();
        if(this.snake.eat(this.food.x, this.food.y)){
            this.food.update();
        }
    }

    // Hàm vẽ đối tượng Snake, Food;
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.food.draw();
    }
}

let game = new Game();


