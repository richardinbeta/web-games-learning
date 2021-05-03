class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 50;
        this.height = 20;
        this.weight = 1;
    }

    update(){
        // add small up/down motion when idle
        let curve = Math.sin(angle) * 15;
        // pull player downwards and ensure player does not go off screen
        if(this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        } else {
        this.vy += this.weight;
        // dampen y velocity; feels better
        this.vy *= 0.9;
        this.y += this.vy;
        }

        if(this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }
        
        // provide some wobble when player reaches top of screen limits
        if(spacePressed && this.y > this.height * 3) this.flap();
    }   


    draw(){
        // represent player
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    flap(){
        // push player upwards when key pressed
        this.vy -= 2;
    }

}

const bird = new Bird();