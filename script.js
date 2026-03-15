// تهيئة خلفية الـ Particles
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#3b82f6" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#3b82f6",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "enable": true, "speed": 2 }
  }
});

// تأثير بسيط عند التمرير لجعل العناصر تظهر بسلاسة
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const speed = 0.05;
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            card.style.opacity = 1;
        }
    });
});