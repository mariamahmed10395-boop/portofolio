// 1. تهيئة خلفية الجزيئات (Particles)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#00abf0" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00abf0",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "enable": true, "speed": 2 }
  }
});

// 2. كود الروبوت الصغير (تحريك بسيط)
const robot = document.querySelector('.mini-robot');
if(robot) {
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        robot.style.transform = `translate(${x}px, ${y}px) rotate(${x/2}deg)`;
    });
}