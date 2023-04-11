canvas=document.getElementById("Canvas");
ctx=canvas.getContext("2d");

mouseEvent="";
canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e) {
    mouseEvent="mouse_down";
}

canvas.addEventListener("mousemove",mouse_move)
function mouse_move(e) {
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouse_down") {
        ctx.beginPath();
        ctx.strokeStyle="blue";
        ctx.lineWidth=3;
        ctx.arc(current_x,current_y,25,0,360)
        ctx.stroke();
        console.log
    }
}
canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e) {
    mouseEvent="mouse_up";
}
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e) {
    mouseEvent="mouse_leave";
}