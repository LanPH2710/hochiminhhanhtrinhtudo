// main.js
// GSAP + ScrollTrigger, counter, timeline, map, menu, flip card, reflections
// ===================== MENU HAMBURGER =====================
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
}

// ===================== CTA SCROLL =====================
// document.getElementById('cta-explore').addEventListener('click', function() {
//   document.getElementById('years').scrollIntoView({ behavior: 'smooth' });
// });

const cta = document.getElementById('cta-explore');
if (cta) {
  cta.addEventListener('click', () => {
    document.getElementById('years')?.scrollIntoView({ behavior: 'smooth' });
  });
}



// ===== HEADER LUÔN HIỆN =====
const header = document.querySelector('.main-header');
if (header) {
  header.classList.add('show');
  header.classList.remove('hide');
}


// ===================== COUNTER ANIMATION =====================
function animateCounter(el, target, duration = 1.5) {
  gsap.fromTo(el, { innerText: 0 }, {
    innerText: target,
    duration: duration,
    ease: 'power1.out',
    snap: { innerText: 1 },
    onUpdate: function() {
      el.innerText = Math.floor(el.innerText);
    },
    onComplete: function() {
      el.innerText = target;
    }
  });
}
function setupCounters() {
  document.querySelectorAll('.counter-number').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      once: true,
      onEnter: () => animateCounter(counter, target)
    });
  });
}

// ===================== PAGE NAVIGATION =====================
function showPageSection(sectionId) {
  // Hide all page sections
  document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
  // Show selected
  const sec = document.getElementById(sectionId);
  if (sec) sec.style.display = '';
  // Scroll to top for new page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function handleMenuClick(e) {
  const href = e.target.getAttribute('href');
  if (href && href.startsWith('#')) {
    const id = href.slice(1);
    // Remove active on all
    document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
    e.target.classList.add('active');
    // Nếu là các page-section thì chuyển trang, ẩn landing
    if (["timeline","map","core-values","media","youth"].includes(id)) {
      document.querySelectorAll('main > .section:not(.page-section)').forEach(sec => sec.style.display = 'none');
      showPageSection(id);
      // Đóng menu mobile
      mainNav.classList.remove('active');
      e.preventDefault();
    } else {
      // Hiện lại landing, ẩn các page-section
      document.querySelectorAll('main > .section:not(.page-section)').forEach(sec => sec.style.display = '');
      document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
    }
  }
}
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', handleMenuClick);
});

// ===================== INIT =====================
window.addEventListener('DOMContentLoaded', () => {
  setupCounters();
  renderTimeline();
  setupTimelineScroll();
  renderMapMarkers();
  renderCoreValues();
  renderYouthReflections();
  // Mặc định chỉ hiện landing, ẩn các page-section
  document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
});

// ===================== FADE/SLIDE SECTION (chỉ cho landing) =====================
gsap.utils.toArray('main > .section:not(.page-section)').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1.1,
    scrollTrigger: {
      trigger: section,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  });
});
