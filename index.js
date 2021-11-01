console.log("are we here?");

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid black";
// ctx.translate(-150, -75);
// ctx.rotate(Math.PI / 2);
// ctx.translate(150, 75);

let bg1 = new Image();
bg1.src = "./images/360_F_357117060_yV3A2INxBDKlab5KSEHFUEtzokb5IiJ6.jpeg";

let bg2 = new Image();
bg2.src =
  "images/high-quality-horizontal-background-cityscape-260nw-1055260328.jpg";

let player = new Image();
player.src = "./images/Lucky.png";

//Declaring variables:
let intervalId = 0;
let isGameOver = false;
let playerY = 610,
  playerX = 180;

function draw() {
  // ctx.drawImage(bg2, 0, 0);
  ctx.drawImage(player, playerX, playerY, 55, 55);
  // ctx.drawImage(bg1, 265, 0);
  canvas.style.display = "block";

  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 10;
  ctx.fillRect(0, 80, 280, 100);
  ctx.closePath();

  ctx.beginPath();
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.globalAlpha = 1;
  ctx.lineWidth = 10;
  ctx.fillRect(350, 280, 300, 100);
  ctx.closePath();

  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 10;
  ctx.shadowBlur = 1;
  // ctx.fillStyle = gray;
  ctx.fillRect(280, 80, 100, 580);
  ctx.closePath();
}

function animation() {
  draw();
  // playerX = playerX - 5;
  playerY = playerY + 5;
  console.log("are we here too?");
}

window.addEventListener("load", () => {
  animation();
});
