var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

count = 0;
colors = ["#2EABFF", "#F77046", "#FFC12E", "#96C42E", "#C6E8FF"]
setInterval(() => {
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = colors[0];
  ctx.fillRect(0, canvas.height / 2 - count, canvas.width, count * 2);
  count += 1;
}, 15);
