const images = [
    "./images/my-photo1.jpg",
    "./images/my-photo2.jpg",
    "./images/my-photo3.jpg",
    "./images/my-photo4.jpg",
    "./images/my-photo5.jpg"
];

let index = 0;

// 抓取现有结构里的元素（无需改 HTML）
const coverEl   = document.querySelector(".player-card .cover");
const prevBtn   = document.querySelector('.player-card [data-action="prev"]');
const playBtn   = document.querySelector('.player-card [data-action="play"]');
const nextBtn   = document.querySelector('.player-card [data-action="next"]');

function updateCover() {
    coverEl.src = images[index];
    coverEl.alt = `Album cover ${index + 1}/${images.length}`;
}

// 事件绑定
prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateCover();
});

nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateCover();
});


playBtn.addEventListener("click", () => {
    playBtn.classList.toggle("playing");
});

  updateCover();


/* ===<(Canva)>=== */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;



const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "rgba(76, 154, 247, 0.7)");  
gradient.addColorStop(0.7, "rgba(162, 222, 250, 0.5)");  
gradient.addColorStop(0.7, "rgba(201, 252, 118, 0.5)");
gradient.addColorStop(1, "rgba(201, 252, 118, 0.5)");   

ctx.fillStyle = gradient;

ctx.fillRect(0, 0, canvas.width, canvas.height);


const treeLeaves = new Path2D("M 5.035 -7.219 L 5.542 -7.177 L 5.879 -7.029 L 6.829 -7.177 L 6.365 -8.211 L 6.681 -8.781 L 8.032 -8.169 L 8.307 -8.105 L 8.138 -8.95 L 9.214 -8.549 L 9.763 -9.097 L 8.792 -9.625 L 9.362 -10.195 L 8.644 -10.301 L 7.863 -10.216 L 8.138 -10.955 L 8.032 -11.44 L 8.518 -12.074 L 8.307 -12.327 L 8.708 -12.833 L 8.602 -13.15 L 7.863 -13.235 L 7.631 -13.678 L 7.462 -14.311 L 6.597 -14.311 L 7.293 -14.754 L 7.927 -14.923 L 7.652 -15.599 L 8.159 -16 L 8.665 -16.591 L 7.631 -16.633 L 6.766 -16.147 L 6.09 -16.211 L 5.732 -16.021 L 5.563 -16.485 L 6.069 -16.907 L 6.407 -17.414 L 5.985 -17.646 L 4.993 -17.393 L 4.444 -17.92 L 3.938 -18.469 L 4.444 -18.807 L 3.748 -19.271 L 3.114 -18.596 L 2.059 -17.963 L 1.405 -18.807 L 0.455 -18.723 L 0.012 -19.356 L -0.643 -19.145 L -1.403 -19.419 L -2.31 -19.187 L -2.838 -18.807 L -3.176 -18.807 L -3.387 -18.237 L -4.379 -18.237 L -4.991 -17.752 L -4.294 -17.372 L -4.4 -16.781 L -5.054 -16.907 L -5.413 -16.316 L -6.088 -16.084 L -6.468 -16.886 L -6.954 -16.865 L -7.249 -16.253 L -7.059 -15.641 L -7.967 -15.662 L -8.621 -15.556 L -8.748 -14.733 L -7.904 -14.522 L -7.165 -14.121 L -7.629 -13.425 L -7.65 -12.39 L -8.389 -12.475 L -8.6 -12.031 L -8.769 -11.335 L -9.508 -12.158 L -9.782 -11.462 L -9.529 -10.744 L -9.487 -9.878 L -8.959 -9.372 L -8.094 -9.984 L -7.735 -9.625 L -8.115 -8.718 L -8.621 -8.401 L -7.988 -8.084 L -7.397 -8.718 L -6.996 -8.317 L -6.553 -8.633 L -6.173 -8.971 L -5.392 -8.57 L -4.801 -8.401 L -5.033 -7.81 L -4.147 -7.937 L -3.767 -7.451 L -3.197 -7.05 L -2.352 -7.662 L -1.825 -7.557 L -1.191 -7.071 L -0.833 -7.852 L 0.37 -8.274 L 0.856 -7.346 L 1.489 -8.211 L 2.059 -8.823 L 2.566 -7.894 L 2.819 -7.873 L 2.946 -7.409 L 3.663 -7.831 L 4.275 -8 L 4.824 -7.726 L 5.035 -7.219");
const scale = 30;

ctx.save();
ctx.translate(
    canvas.width / 2,
    canvas.height * 0.9
);
ctx.scale(scale, scale);
ctx.lineWidth = 0.2;
ctx.strokeStyle = "rgba(244, 210, 207, 0.9)";
ctx.stroke(treeLeaves);
ctx.fillStyle = "rgba(252, 187, 193, 0.9)";
ctx.fill(treeLeaves);


treeArch = new Path2D("M 0 0 L 1.876 -0.343 C 1.3 -0.845 0.947 -1.625 0.947 -2.071 L 0.984 -4.672 C 1.857 -6.177 3.938 -6.53 5.369 -7.478 L 6.112 -8.927 L 6.037 -9.187 L 6.844 -9.845 L 6.987 -10.178 L 5.988 -9.312 L 5.199 -7.829 L 4.019 -7.248 L 4.304 -7.981 L 4.162 -8.142 L 3.477 -6.972 L 1.527 -6.24 L 2.725 -8.685 L 2.535 -9.36 L 2.136 -10.187 L 1.993 -10.654 L 1.936 -10.758 L 1.917 -10.111 L 2.297 -9.265 L 2.307 -8.57 L 1.85 -8.095 L 1.556 -8.656 L 1.051 -8.951 L 0.633 -9.683 L 0.357 -9.969 L 0.585 -9.484 L 0.747 -8.913 C 1.917 -8.295 1.432 -7.543 1.479 -7.362 L 0.842 -6.269 L 0.528 -6.906 L 0.271 -8.057 L -0.385 -9.398 L -0.404 -10.045 L 0.309 -10.635 L 0.414 -11.234 L 0.899 -12.242 L 0.909 -13.646 L 0.787 -12.671 L 0.458 -11.769 L -0.335 -13.256 L 0.116 -14.219 L 0.128 -14.451 L -0.566 -13.512 L -1.017 -14.219 L -0.883 -15.523 L -0.749 -16.243 L -0.408 -16.584 L 0.031 -16.986 L -0.42 -16.73 L -0.493 -17.462 L -0.591 -16.84 L -0.822 -16.438 L -1.225 -14.341 L -1.2 -14.061 L -2.127 -14.889 L -2.273 -15.901 L -2.078 -16.377 L -2.358 -17.449 L -2.273 -16.462 L -2.383 -16.035 L -2.663 -16.779 L -3.065 -17.096 L -2.639 -16.45 L -2.273 -14.792 L -1.481 -14.048 L -1.054 -13.707 L -0.53 -12.927 L 0.202 -11.513 L -0.152 -10.879 L -0.664 -10.33 L -1.017 -10.794 L -2.456 -11.647 L -2.432 -12.525 L -2.127 -13.305 L -2.505 -12.72 L -2.639 -13.695 L -2.675 -12.781 L -2.712 -11.671 L -3.224 -10.915 L -4.284 -11.366 L -5.418 -11.671 L -5.759 -12.134 L -5.833 -13.719 L -5.967 -13.11 L -6.71 -14.329 L -6.015 -13 L -5.93 -12.061 L -5.784 -11.842 L -5.516 -11.391 L -4.053 -10.964 L -3.224 -10.55 L -2.518 -11.322 L -1.155 -10.532 L -0.814 -9.819 L -0.861 -9.169 L -1.403 -9.246 L -2.828 -10.733 L -3.092 -10.439 L -2.364 -9.509 L -3.479 -9.664 L -4.254 -10.455 L -4.037 -9.742 L -4.486 -9.308 L -5.462 -9.169 L -6.346 -9.463 L -7.136 -10.315 L -7.089 -9.866 L -7.74 -10.532 L -7.787 -10.331 L -7.167 -9.68 L -6.81 -9.231 L -5.54 -8.905 L -4.765 -8.89 L -3.65 -9.447 L -2.085 -9.246 L -1.356 -8.44 L -0.69 -8.022 L -0.52 -7.309 L -0.349 -6.038 L -0.365 -5.418 L -0.504 -4.907 L -0.473 -3.187 L -0.814 -2.041 L -1.062 -1.452 L -1.403 -0.677 L -1.604 -0.243 L -0.907 -0.352 L -0.551 -0.584 L -0.256 -0.243 L 0 0");
ctx.lineWidth = 0.2;
ctx.strokeStyle = "rgba(125, 55, 63, 0.9)";
ctx.stroke(treeArch);
ctx.fillStyle = "rgba(148, 77, 73, 0.9)";
ctx.fill(treeArch);

ctx.restore();


ctx.save();
const sunX = canvas.width * 0.15;
const sunY = canvas.height * 0.18;
const sunR = 60;

const sunGradient = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, sunR);
sunGradient.addColorStop(0, "rgba(255, 255, 200, 1)");
sunGradient.addColorStop(1, "rgba(255, 200, 120, 0.5)");

ctx.fillStyle = sunGradient;
ctx.shadowColor = "rgba(255, 230, 150, 0.9)";

ctx.beginPath();
ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
ctx.fill();
ctx.restore();


ctx.save();
function drawGrass(x, baseY, height, color) {
    const g = new Path2D();
    g.moveTo(x, baseY);
    g.quadraticCurveTo(x - 10, baseY - height * 0.4, x - 3, baseY - height);
    g.quadraticCurveTo(x + 8, baseY - height * 0.4, x, baseY);

    ctx.fillStyle = color;
    ctx.fill(g);
}

drawGrass(canvas.width * 0.25, canvas.height * 0.8, 80, "rgba(60, 140, 70, 0.9)");
drawGrass(canvas.width * 0.30, canvas.height * 0.95, 60, "rgba(70, 160, 80, 0.9)");
drawGrass(canvas.width * 0.35, canvas.height * 1, 90, "rgba(55, 130, 65, 0.9)");

drawGrass(canvas.width * 0.65, canvas.height * 0.87, 75, "rgba(60, 150, 75, 0.9)");
drawGrass(canvas.width * 0.70, canvas.height * 0.95, 55, "rgba(70, 170, 90, 0.9)");

drawGrass(canvas.width * 0.4, canvas.height * 0.83, 80, "rgba(60, 140, 70, 0.9)");
drawGrass(canvas.width * 0.45, canvas.height * 0.89, 60, "rgba(70, 160, 80, 0.9)");
drawGrass(canvas.width * 0.2, canvas.height * 0.85, 90, "rgba(55, 130, 65, 0.9)");

drawGrass(canvas.width * 0.6, canvas.height * 0.9, 75, "rgba(60, 150, 75, 0.9)");
drawGrass(canvas.width * 0.8, canvas.height * 0.85, 55, "rgba(70, 170, 90, 0.9)");
ctx.restore();