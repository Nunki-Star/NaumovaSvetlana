let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d")  //ctx---context
ctx.fillStyle = "lightblue"
ctx.fillRect(100, 50, 150, 75);
ctx.fillStyle = "red";
ctx.fillRect(150, 100, 100, 50);

ctx.fillStyle = "deeppink";
ctx.fillRect(100, 50, 50, 50);
ctx.clearRect(0, 0, 400, 200)//delete
//ctx.fillRect(x, y, width, height);


ctx.rect(50, 10, 100, 100);
ctx.strokeStyle = "springgreen";
ctx.lineWidth = "10";

ctx.stroke()
ctx.fill()