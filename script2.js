document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.content-box');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const lanjutBtn = document.getElementById('lanjut-btn');
  const nextButton = document.querySelector(".next-button");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-popup");

  let currentIndex = 0;

  function showSection(index) {
    if (index < 0 || index >= sections.length) return;

    const current = sections[currentIndex];
    const next = sections[index];

    current.classList.remove('active');
    current.classList.add('fade-out');

    setTimeout(() => {
      current.style.display = 'none';
      current.classList.remove('fade-out');

      next.style.display = 'block';
      next.classList.add('active');

      currentIndex = index;

      if (currentIndex === sections.length - 1) {
        nextBtn.style.display = 'none';
        lanjutBtn.style.display = 'flex';
      } else {
        nextBtn.style.display = 'inline-block';
        lanjutBtn.style.display = 'none';
      }
    }, 400);
  }

  sections.forEach((section, i) => {
    section.style.display = i === 0 ? 'block' : 'none';
    section.classList.toggle('active', i === 0);
  });

  prevBtn.addEventListener('click', () => {
    showSection(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSection(currentIndex + 1);
  });

  if (nextButton) {
    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "flex";
    });
  }

  // Klik luar popup
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // Tombol ✖ tutup
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});
