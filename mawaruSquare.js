var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let x_center = canvas.width / 2;
let y_center = canvas.height / 2;
let radius = 300;

function renderSquare(color, theta) {
  ctx.fillStyle = color; //塗りつぶし色を赤に
  let x = x_center + Math.cos(theta / 180 * Math.PI) * radius;
  let y = y_center - Math.sin(theta / 180 * Math.PI) * radius;
  ctx.fillRect(x, y, 30, 30);
}

count = 0;
colors = ["#2EABFF", "#F77046", "#FFC12E", "#96C42E", "#C6E8FF"]
setInterval(() => {
  ctx.fillStyle = "#333"; //消去時の色
  ctx.fillRect(0, 0, canvas.width, canvas.height); //消す

  let squareCount = 12;
  for (let i = 0; i < squareCount; i++) {
    renderSquare(colors[i % 5], count + i * 360 / squareCount);
  }
  count -= 1;
}, 15);
