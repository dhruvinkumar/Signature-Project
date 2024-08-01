
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
ctx.fillStyle = "red";
ctx.fill()
let draw = false;

canvas.addEventListener('mousedown',(e)=>{
    draw = true;
});

canvas.addEventListener('mousemove',(e)=>{
    if(draw){
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
};
});

canvas.addEventListener('mouseup',(e)=>{
draw = false;
    ctx.beginPath();
})


function downloadCanva(){
    const link = document.createElement('a');
    link.href = canvas.toDataURL("image/png");
    link.download = "myCanvas.png";
    link.click();
}

function clearcanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}