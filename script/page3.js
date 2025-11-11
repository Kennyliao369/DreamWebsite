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

const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

// 画个测试图形
ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
ctx.fillRect(0, 0, canvas.width, canvas.height);