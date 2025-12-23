const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let width, height;
let mouseX = 0;
let mouseY = 0;

const resize = () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
};

window.addEventListener("resize", resize);
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const animate = () => {
  ctx.clearRect(0, 0, width, height);
  const gradient = ctx.createRadialGradient(
    mouseX,
    mouseY,
    50,
    mouseX,
    mouseY,
    300
  );
  gradient.addColorStop(0, "#00f2ff");
  gradient.addColorStop(1, "transparent");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  requestAnimationFrame(animate);
};

resize();
animate();
