document.addEventListener('DOMContentLoaded', () => {
    const totalQuestions = 25;
    const questionGrid = document.getElementById('question-grid');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupQuestion = document.getElementById('popup-question');
    const closeBtn = document.getElementById('close-popup');
  
    // Dummy soal, nanti lu ganti isinya
    const questions = [
        "Apa yang dimaksud dengan permasalahan sosial?",
        "Sebutkan dua contoh dampak dari perkembangan sosial yang berlangsung cepat!",
        "Apa penyebab utama permasalahan sosial menurut faktor ekonomi?",
        "Mengapa faktor budaya bisa menyebabkan permasalahan sosial?",
        "Sebutkan contoh masalah sosial yang berhubungan dengan faktor biologis!",
        "Mengapa faktor psikologis sulit ditangani dalam permasalahan sosial?",
        "Apa kriteria utama terjadinya permasalahan sosial menurut sudut pandang sosiologi?",
        "Jelaskan perbedaan antara manifest social problem dan latent social problem!",
        "Sebutkan salah satu sumber permasalahan sosial yang terkait dengan alam!",
        "Bagaimana perhatian masyarakat mempengaruhi status suatu masalah sebagai permasalahan sosial?",
        "Siapa saja pihak yang dapat menetapkan suatu masalah sebagai permasalahan sosial?",
        "Apa itu eksklusi sosial menurut David Bayrne?",
        "Jelaskan konsep piramida solidaritas dalam eksklusi sosial!",
        "Apa yang dimaksud dengan piramida spesialisasi dalam konteks eksklusi sosial?",
        "Jelaskan paradigma monopoli menurut Silver terkait eksklusi sosial!",
        "Sebutkan dua kelompok dalam paradigma monopoli!",
        "Bagaimana perubahan sosial dapat memengaruhi eksklusi sosial?",
        "Berikan contoh eksklusi sosial tradisional di Indonesia!",
        "Sebutkan bentuk eksklusi sosial modern yang ada di Indonesia!",
        "Mengapa ketimpangan gender termasuk eksklusi sosial?",
        "Apa dampak eksklusi sosial terhadap akses pekerjaan dan politik?",
        "Bagaimana eksklusi sosial dapat memengaruhi solidaritas antar warga?",
        "Apa hubungan antara eksklusi sosial dan kemiskinan?",
        "Mengapa permasalahan sosial tidak bisa ditetapkan secara mandiri oleh setiap anggota masyarakat?",
        "Sebutkan contoh latent social problem yang tidak disadari masyarakat!"
      ];
      
  
    // Generate nomor soal grid
    for(let i=1; i <= totalQuestions; i++) {
      const btn = document.createElement('button');
      btn.className = 'question-number';
      btn.textContent = i;
      btn.setAttribute('aria-label', `Buka soal nomor ${i}`);
  
      btn.addEventListener('click', () => {
        popupTitle.textContent = `Soal ${i}`;
        popupQuestion.textContent = questions[i-1];
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // disable scroll saat popup
      });
  
      questionGrid.appendChild(btn);
    }
  
    // Close popup
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
      document.body.style.overflow = ''; // enable scroll lagi
    });
  
    // Tutup popup kalau klik di luar konten
    popup.addEventListener('click', (e) => {
      if(e.target === popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  