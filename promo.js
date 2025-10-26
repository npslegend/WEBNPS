// Neon title blink effect
const title = document.querySelector('.animated-title');
let glow = true;
setInterval(() => {
  if (glow) {
    title.style.textShadow = "0 0 20px #00ffea, 0 0 40px #ff00ff, 0 0 60px #00ffea";
  } else {
    title.style.textShadow = "0 0 10px #00ffea, 0 0 20px #ff00ff, 0 0 30px #00ffea";
  }
  glow = !glow;
}, 1500);

// Scroll animation for features and CTA
const cards = document.querySelectorAll('.card');
const ctaSection = document.querySelector('.cta');

function revealOnScroll(element) {
  const windowHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  if(elementTop < windowHeight - 50){
    element.classList.add('visible');
  }
}

window.addEventListener('scroll', () => {
  cards.forEach(card => revealOnScroll(card));
  revealOnScroll(ctaSection);
});