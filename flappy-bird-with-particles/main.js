const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d')

canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleObstacles();
    bird.update();
    bird.draw();
    handleParticles();
    handleCollisions();
    // recurisive call to run main game loop
    requestAnimationFrame(animate);
    angle+=0.12;
    hue++;
    frame++;
}

animate();

window.addEventListener('keydown', function(e) {
    //console.log('Keydown');
    if (e.code === 'Space') spacePressed = true;
})

window.addEventListener('keyup', function(e) {
    //console.log('Keyup');
    if (e.code === 'Space') spacePressed = false;
})

// collision
const bang = new Image;
bang.src = "bang.png"

function handleCollisions(){
    // check bird against each obstacle using square collision detection
    for (let i = 0; i < obstaclesArray.length; i++){
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width && bird.x + bird.width > obstaclesArray[i].x && 
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) || 
            bird.y > canvas.height - obstaclesArray[i].bottom && bird.y + bird.height < canvas.height)){
                // collision detected
                ctx.drawImage(bang, bird.x, bird.y, 50, 50);
                return true;
            }
    }
}