let gs = 20;
let tc = 30;
let px = py = 15;
let vx = vy = 0;
let trail = [];
let tail = 5;
let fx = fy = 25;
let preInp = 0;


window.onload = function() {
    cnv = document.getElementById("gc");
    ctx = cnv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 15);
    document.getElementById("wrapper").style.display = "block";
}

// function play() {
//     cnv = document.getElementById("gc");
//     ctx = cnv.getContext("2d");
//     document.addEventListener("keydown", keyPush);
//     setInterval(game, 1000 / 15);
//     document.getElementById("wrapper").style.display = "block";
//     document.getElementById("first").style.display = "none";
// }

function game() {


    grad = ctx.createLinearGradient(0, 600, 600, 0);
    grad.addColorStop(1, "rgb(220, 100, 100)");
    grad.addColorStop(0, "rgb(40, 220, 40)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    px += vx;
    py += vy;

    if (px < 0) px = tc - 1;
    if (px > tc - 1) px = 0;
    if (py < 0) py = tc - 1;
    if (py > tc - 1) py = 0;

    for (let i = 0; i < trail.length; i++) {

        if (i % 2 == 0) ctx.fillStyle = "orange";
        if (i % 2 == 1) ctx.fillStyle = "yellow";
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);

        if (i == trail.length - 1) {
            ctx.fillStyle = "red";
            ctx.fillRect((trail[i].x * gs) - 1, (trail[i].y * gs) - 1, gs, gs);
        }
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
            document.getElementById("length").innerHTML = tail;
        }
    }

    trail.push({
        x: px,
        y: py
    });

    while (trail.length > tail) trail.shift();

    ctx.fillStyle = "lime";
    ctx.fillRect(fx * gs, fy * gs, gs - 2, gs - 2);

    if (fx == px && fy == py) {
        tail++;
        fx = Math.floor(Math.random() * tc);
        fy = Math.floor(Math.random() * tc);
        document.getElementById("length").innerHTML = tail;
    }

}

function keyPush(e) {
    document.getElementById("score").style.display = "block";
    switch (e.keyCode) {
        case 37:
            if (preInp == 39) break;
            preInp = 37;
            vx = -1;
            vy = 0;
            break;
        case 38:
            if (preInp == 40) break;
            preInp = 38;
            vx = 0;
            vy = -1;
            break;
        case 39:
            if (preInp == 37) break;
            preInp = 39;
            vx = 1;
            vy = 0;
            break;
        case 40:
            if (preInp == 38) break;
            preInp = 40;
            vx = 0;
            vy = 1;
            break;
    }
}