// Partikel futuristik di belakang
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particlesArray;
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  init();
});

class Particle {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = `hsl(${Math.random()*360}, 100%, 50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > w) this.speedX *= -1;
    if(this.y < 0 || this.y > h) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for(let i=0; i<150; i++){
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0,0,w,h);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();