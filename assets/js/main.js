// ==========================================
// DAMAR ART - MAIN JAVASCRIPT
// 100% Client-side sandbox matching damarart.com
// ==========================================

let currentSlide = 0;
let slideInterval;
let slides = [];
let dots = [];

function initSlider() {
  slides = document.querySelectorAll('.slide-item');
  dots = document.querySelectorAll('#sliderDots button');

  if (!slides.length) return;

  updateSlider();
  startSlideInterval();
}

function updateSlider() {
  if (!slides.length) return;

  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.remove('opacity-0', 'pointer-events-none');
      slide.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      slide.classList.remove('opacity-100', 'pointer-events-auto');
      slide.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  if (dots.length) {
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.className = "w-3 h-3 rounded-full bg-[#a4413b] border-2 border-white transition-all transform scale-110";
      } else {
        dot.className = "w-2.5 h-2.5 rounded-full bg-[#e3b695] hover:bg-[#a4413b]/70 transition-all";
      }
    });
  }
}

function nextSlide() {
  if (!slides.length) return;
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  if (!slides.length) return;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
  resetSlideInterval();
}

function startSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}

// Modal Layanan Unggulan
function openLayananModal() {
  const modal = document.getElementById('layananModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeLayananModal() {
  const modal = document.getElementById('layananModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

// Newsletter form simulation
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletterEmail');
  const email = input ? input.value : '';
  if (email) {
    alert(`Terima kasih! Email "${email}" telah terdaftar untuk menerima newsletter Damar Art.`);
    if (input) input.value = '';
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initSlider();

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  if (navToggle && mobileNavMenu) {
    navToggle.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('hidden');
    });
  }

  // Close modal when clicking outside
  const modal = document.getElementById('layananModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLayananModal();
      }
    });
  }
});
