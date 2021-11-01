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
player.src =
  "./images/176-1769151_660-x-1650-13-bike-icon-top-view__1_-removebg-preview.png";

let rPlayer = new Image();
rPlayer.src = "./images/player1-removebg-preview.png";

let audio = new Audio();
audio.src =
  "https://res.cloudinary.com/manishp/video/upload/v1623305320/Horizon_Zero_Dawn_OST_-_Years_Of_Training_badkhk.mp3";

let car1 = new Image();
car1.src =
  "./images/png-transparent-taxi-car-simulator-3d-dodge-sprite-sprite-s-rectangle-car-video-game-removebg-preview.png";

let car2 = new Image();
car2.src = "./images/a6rBl-removebg-preview.png";
//Declaring variables:
let startBtn = document.querySelector("#startBtn");
let restartBtn = document.querySelector("#restart");
let intervalId = 0;
let isGameOver = false;
let playerY = 610,
  playerX = 300;
let isRight = false,
  isLeft = false;
isRotate = false;
let gameOver = false;
let mouseClick = false;
let score = 0;
let car1X = -50,
  car1Y = 100;
let car2X = 605,
  car2Y = 310;

let playerRight = false;

function draw() {
  ctx.beginPath();
  ctx.shadowBlur = 0;
  ctx.setLineDash([0]);
  ctx.strokeStyle = "#cf1020";
  ctx.arc(10 + 25, 10 + 25, 24, 0, 2 * Math.PI);
  ctx.globalAlpha = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.shadowBlur = 0;
  ctx.setLineDash([0]);
  ctx.strokeStyle = "#cf1020";
  ctx.arc(40 + 25, 10 + 25, 24, 0, 2 * Math.PI);
  ctx.globalAlpha = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.shadowBlur = 0;
  ctx.setLineDash([0]);
  ctx.strokeStyle = "#cf1020";
  ctx.arc(540 + 25, 10 + 25, 24, 0, 2 * Math.PI);
  ctx.globalAlpha = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.shadowBlur = 0;
  ctx.setLineDash([0]);
  ctx.strokeStyle = "#cf1020";
  ctx.arc(510 + 25, 10 + 25, 24, 0, 2 * Math.PI);
  ctx.globalAlpha = 1;
  ctx.stroke();
  // ctx.drawImage(bg2, 0, 0);
  // ctx.drawImage(bg1, 265, 0);
  ctx.beginPath();
  ctx.stroke();
  ctx.lineWidth = 10;
  ctx.fillRect(0, 80, 280, 100);
  ctx.closePath();

  ctx.drawImage(car1, car1X, car1Y, 55, 60);
  ctx.drawImage(car2, car2X, car2Y, 55, 60);

  ctx.beginPath();
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.globalAlpha = 1;
  ctx.lineWidth = 10;
  ctx.fillRect(380, 280, 300, 100);
  ctx.closePath();

  ctx.beginPath();
  // ctx.stroke();
  ctx.lineWidth = 10;
  // ctx.shadowBlur = 1;
  ctx.fillStyle = "rgba(67, 63, 63, 0.5)";
  ctx.fillRect(280, 80, 100, 640);
  ctx.closePath();

  if(playerRight) {
    ctx.drawImage(rPlayer, playerX, playerY, 55, 55);
  } else {
    ctx.drawImage(player, playerX, playerY, 55, 55);
  }

  // ctx.drawImage(player, playerX, playerY, 55, 55);
  // ctx.drawImage(rPlayer, 610, 280, 55, 55);
}

function handleStart() {
  canvas.style.display = "block";
  animation();
  audio.play();
  audio.volume = 0.5;
}

function showGameOver() {
  canvas.style.display = "none";
}

// function drawRotated(degree) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.save();
//   ctx.translate(canvas.width / 2, canvas.height / 2);
//   ctx.rotate((degree * Math.PI) / 180);
//   ctx.drawImage(player, -player.width / 2, -player.width / 2, 55, 55);
//   ctx.restore();
// }

function animation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();
  playerY = playerY - 1;
  car1X = car1X + 0.5;
  car2X = car2X - 1;

  if (isRight) {
    playerX = playerX + 1;
  }
  if (isLeft) {
    playerX = playerX - 1;
  }
  // if (isRotate) {
  //   // player = rPlayer;
  //   // drawRotated(90);
  // }

  ctx.font = "24px Verdana";
  ctx.fillText(`Score: ${score}`, 230, 40);

  if (gameOver) {
    cancelAnimationFrame(intervalId);
    showGameOver();
  } else {
    intervalId = requestAnimationFrame(animation);
  }
}

window.addEventListener("load", () => {
  canvas.style.display = "none";

  startBtn.addEventListener("click", () => {
    handleStart();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") {
      isLeft = true;
      isRight = false;
    }
    if (event.key == "ArrowRight") {
      isRight = true;
      isLeft = false;
    }
  });

  document.addEventListener("click", (event) => {
    if (instanceofMouseEvent.offsetX) {
      return (mouseClick = true);
    }
  });

  document.addEventListener("keypress", (event) => {
    if (event.key == "r") {
      playerRight = true
    }
  });
});
