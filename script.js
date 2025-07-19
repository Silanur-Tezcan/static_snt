// Swiper başlatma
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Scroll animasyonu (section'lar için)
const animatedSections = document.querySelectorAll(".animate");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      // Dilersen aşağıdaki satırı kaldırarak animasyonun sadece ilk kez tetiklenmesini sağlayabilirsin
      entry.target.classList.remove("visible");
    }
  });
});
animatedSections.forEach((section) => sectionObserver.observe(section));

// Kartlar için sağ ve soldan kayarak giriş animasyonu
const slideCards = document.querySelectorAll('.slide-in-left, .slide-in-right');

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1,
});

slideCards.forEach(card => slideObserver.observe(card));
// resim büyütme
document.querySelectorAll('.zoomable').forEach(item => {
  item.addEventListener('click', function () {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('imageModal').style.display = 'none';
});

window.addEventListener('click', function (e) {
  const modal = document.getElementById('imageModal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// açılır kapanır navbar
document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll('.navbar').forEach((el, i) => {
      setTimeout(() => el.classList.add('show'), i * 200);
   });
});
