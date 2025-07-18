const boxes = document.querySelectorAll('.content-box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.3 });
const groupText = document.getElementById('group-text');
const oneText = document.getElementById('one-text');
const tmText = document.getElementById('tm-text');
const outerShape = document.getElementById('outer-shape');
const innerShape = document.getElementById('inner-shape');
const splash = document.getElementById('splash-screen');

// Inisialisasi teks awal dengan class hidden-left (posisi geser kiri & kecil)
groupText.classList.add('hidden-left');
oneText.classList.add('hidden-left');
tmText.style.opacity = '0'; // TM langsung hilang dulu

// Animasi urut:
// 1. Setelah 4 detik (selesai stroke), munculkan teks GROUP
setTimeout(() => {
  groupText.classList.remove('hidden-left');
  groupText.classList.add('visible');
}, 1000);

// 2. Setelah 5 detik, munculin ONE
setTimeout(() => {
  oneText.classList.remove('hidden-left');
  oneText.classList.add('visible');
}, 1000);

// 3. Setelah 6 detik, munculin TM
setTimeout(() => {
  tmText.style.transition = 'opacity 1s ease';
  tmText.style.opacity = '1';
}, 1000);

// 4. Setelah 8 detik, fade out & majuin semua teks + splash screen hilang
setTimeout(() => {
  groupText.classList.add('fade-move-up');
  oneText.classList.add('fade-move-up');
  tmText.style.transition = 'opacity 1.5s ease';
  tmText.style.opacity = '0';

  splash.style.transition = 'opacity 1.5s ease';
  splash.style.opacity = '0';

  setTimeout(() => {
    splash.style.display = 'none';
    // redirect atau load halaman utama bisa di sini kalau mau
  }, 1500);
}, 4000);
boxes.forEach(box => observer.observe(box));
const names = ["LUCKY", "AUREL", "AYU", "ZEMA", "OKTA", "ARKAN"];
const animatedNameEl = document.getElementById("animated-name");
let nameIndex = 0;
let animationInterval;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function randomChar() {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function animateName(name, callback) {
  let iteration = 0;
  const maxIterations = name.length * 10;

  clearInterval(animationInterval);

  animationInterval = setInterval(() => {
    let displayed = "";

    for(let i = 0; i < name.length; i++) {
      if(i < iteration / 10) {
        displayed += name[i];
      } else {
        displayed += randomChar();
      }
    }

    animatedNameEl.textContent = displayed;

    iteration++;

    if(iteration > maxIterations) {
      clearInterval(animationInterval);
      animatedNameEl.textContent = name;
      if(callback) callback();
    }
  }, 50);
}

function loopNames() {
  animateName(names[nameIndex], () => {
    setTimeout(() => {
      nameIndex = (nameIndex + 1) % names.length;
      loopNames();
    }, 1500);
  });
}

loopNames();
