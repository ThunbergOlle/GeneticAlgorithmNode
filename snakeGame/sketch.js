let snake;

function setup(){
    createCanvas(600, 600);
    snake = new DNA(5);
    console.log(snake);
}

function draw(){
    background(51);
    snake.update();
    snake.show();
    snake.dir(0, 1);
}















class Snake{
    constructor(){
        this.x = 0; 
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
    }

    update(){
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }
    dir(x, y){
        this.xspeed = x;
        this.yspeed = y;
    }
    show(){
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}