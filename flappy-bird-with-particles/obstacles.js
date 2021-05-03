const obstaclesArray = [];

class Obstacle {
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 20;
        this.bottom = (Math.random() * canvas.width/3) + 20;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'hsla(' + hue + ',100%, 50%, 0.8)';

    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }

    update() {
        // move obstacles to the right
        this.x -= gamespeed;
        this.draw()
    }
}

function handleObstacles(){
    if (frame%150 === 0){
        // every 50 frames
        obstaclesArray.unshift(new Obstacle);
    }
    // cycle through each array
    for (let i=0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 200) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
}