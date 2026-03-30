// ============================================
// HAMBURGER MENU TOGGLE
// ============================================
const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    navbarMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// ============================================
// SWIPER INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const certificatesSwiper = new Swiper(".certificates-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
});

// ============================================
// TOAST NOTIFICATION SYSTEM
// ============================================
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ============================================
// PROJECT FILTERING SYSTEM
// ============================================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter projects with animation
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        // Show card with fade-in effect
        card.style.display = "block";
        setTimeout(() => {
          card.classList.add("show");
        }, 10);
      } else {
        // Hide card with fade-out effect
        card.classList.remove("show");
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// Initialize all projects as visible
projectCards.forEach((card) => {
  card.classList.add("show");
});

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  sectionObserver.observe(section);
});

// ============================================
// NAVBAR ACTIVE STATE ON SCROLL
// ============================================
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.classList.add("active");
    }
  });
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    // Get form fields
    const inputs = this.querySelectorAll("input[required], textarea[required]");
    let isValid = true;

    // Simple validation
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.style.borderColor = "#ef4444";
        isValid = false;
      } else {
        input.style.borderColor = "";
      }
    });

    if (!isValid) {
      showToast("Lütfen tüm alanları doldurunuz!", "error");
      return;
    }

    // Email validation
    const emailInput = this.querySelector('input[name="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      showToast("Lütfen geçerli bir email adresi girin!", "error");
      return;
    }

    // Show success message (form will submit to FormSubmit.co)
    showToast("✓ Mesajınız gönderildi. Yakında cevap vereceğiz!", "success");
    
    // Optional: reset form after 1 second
    setTimeout(() => {
      this.reset();
    }, 1000);
  });
}

// ============================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================
window.addEventListener("scroll", () => {
  // Add navbar shadow on scroll
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
const navbarLinks = document.querySelectorAll(".nav-link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the navbar if it's open
    const bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});

// ============================================
// SMOOTH SCROLL ON PAGE LOAD
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  // Check if there's a hash in the URL
  if (window.location.hash) {
    setTimeout(() => {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
});
