/* =========================================
   1. تهيئة خلفية الجزيئات (Particles.js)
   ========================================= */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, // زيادة العدد قليلاً لشكل أغنى
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#00abf0" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00abf0",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // الجزيئات تنجذب للماوس عند المرور
      },
      "onclick": {
        "enable": true,
        "mode": "push" // إضافة جزيئات جديدة عند الضغط
      },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

/* =========================================
   2. كود الروبوت الصغير (تحريك تفاعلي)
   ========================================= */
const robot = document.querySelector('.mini-robot');

if (robot) {
    window.addEventListener('mousemove', (e) => {
        // حساب المسافة لتحريك الروبوت بنعومة
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        
        // تحريك الروبوت مع دوران خفيف ليعطي إحساس الطيران
        robot.style.transform = `translate(${x}px, ${y}px) rotate(${x / 2}deg)`;
    });

    // إضافة تأثير عند الضغط على الروبوت
    robot.addEventListener('click', () => {
        robot.style.transition = "0.2s";
        robot.style.transform = "scale(0.8)";
        setTimeout(() => {
            robot.style.transform = "scale(1.2)";
        }, 200);
    });
}

/* =========================================
   3. تأثير ظهور العناصر عند التمرير (Reveal Effect)
   ========================================= */
const revealElements = document.querySelectorAll('.project-card, .skill-item, .service-card');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// تشغيل الدالة مرة واحدة عند التحميل للتأكد من ظهور العناصر العلوية
revealOnScroll();