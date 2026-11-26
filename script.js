const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -35px 0px' });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const heroArt = document.querySelector('.hero-art');
if (heroArt && window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  heroArt.addEventListener('pointermove', (event) => {
    const box = heroArt.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    heroArt.style.setProperty('--pointer-x', `${x * 18}px`);
    heroArt.style.setProperty('--pointer-y', `${y * 18}px`);
  });
  heroArt.addEventListener('pointerleave', () => {
    heroArt.style.setProperty('--pointer-x', '0px');
    heroArt.style.setProperty('--pointer-y', '0px');
  });
}

