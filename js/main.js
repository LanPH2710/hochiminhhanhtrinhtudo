// main.js
// GSAP + ScrollTrigger, counter, timeline, map, menu, flip card, reflections
// ===================== MENU HAMBURGER =====================
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});
// ===================== CTA SCROLL =====================
document.getElementById('cta-explore').addEventListener('click', function() {
  document.getElementById('years').scrollIntoView({ behavior: 'smooth' });
});
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
// ===================== TIMELINE DATA =====================
const timelineData = [
  { year: '1890', title: 'Sinh ra', desc: 'Nguyễn Sinh Cung chào đời tại Nghệ An.', meaning: 'Khởi đầu một nhân cách lớn.', img: 'assets/timeline/1890.jpg' },
  { year: '1895–1901, 1906–1909', title: 'Ở Huế', desc: 'Học tập, tiếp xúc nền giáo dục mới.', meaning: 'Hình thành ý chí cứu nước.', img: 'assets/timeline/hue.jpg' },
  { year: '1911', title: 'Ra đi tìm đường cứu nước', desc: 'Lên tàu Amiral Latouche-Tréville.', meaning: 'Bước ngoặt lịch sử.', img: 'assets/timeline/1911.jpg' },
  { year: '1911–1917', title: 'Lao động & khảo nghiệm thế giới', desc: 'Làm việc tại nhiều nước.', meaning: 'Trải nghiệm thực tiễn.', img: 'assets/timeline/1911-1917.jpg' },
  { year: '1919', title: 'Hoạt động tại Pháp', desc: 'Gửi bản yêu sách tới Hội nghị Versailles.', meaning: 'Khẳng định quyền dân tộc.', img: 'assets/timeline/1919.jpg' },
  { year: '1920', title: 'Bước ngoặt tư tưởng', desc: 'Gia nhập Đảng Xã hội Pháp.', meaning: 'Chọn con đường cách mạng vô sản.', img: 'assets/timeline/1920.jpg' },
  { year: '1921–1923', title: 'Hoạt động tại Pháp', desc: 'Thành lập Hội Liên hiệp thuộc địa.', meaning: 'Kết nối các dân tộc bị áp bức.', img: 'assets/timeline/1921-1923.jpg' },
  { year: '1923–1924', title: 'Liên Xô', desc: 'Học tập, hoạt động quốc tế.', meaning: 'Tiếp thu lý luận cách mạng.', img: 'assets/timeline/1923-1924.jpg' },
  { year: '1925', title: 'Quảng Châu', desc: 'Thành lập Hội Việt Nam Cách mạng Thanh niên.', meaning: 'Đào tạo cán bộ đầu tiên.', img: 'assets/timeline/1925.jpg' },
  { year: '1927', title: '“Đường Kách mệnh”', desc: 'Xuất bản tác phẩm lý luận đầu tiên.', meaning: 'Kim chỉ nam cách mạng.', img: 'assets/timeline/1927.jpg' },
  { year: '1930', title: 'Thành lập ĐCSVN', desc: 'Hợp nhất các tổ chức cộng sản.', meaning: 'Ra đời Đảng Cộng sản Việt Nam.', img: 'assets/timeline/1930.jpg' },
  { year: '1930–1940', title: 'Hoạt động nước ngoài', desc: 'Tiếp tục hoạt động bí mật.', meaning: 'Kiên trì lý tưởng.', img: 'assets/timeline/1930-1940.jpg' },
  { year: '1941', title: 'Trở về Pác Bó', desc: 'Lãnh đạo cách mạng trong nước.', meaning: 'Chuẩn bị tổng khởi nghĩa.', img: 'assets/timeline/1941.jpg' },
  { year: '1941', title: 'Việt Minh', desc: 'Thành lập Mặt trận Việt Minh.', meaning: 'Đoàn kết toàn dân.', img: 'assets/timeline/vietminh.jpg' },
  { year: '1942–1943', title: 'Nhật ký trong tù', desc: 'Bị bắt, sáng tác thơ.', meaning: 'Tinh thần thép.', img: 'assets/timeline/1942-1943.jpg' },
  { year: '1945', title: 'Tuyên ngôn Độc lập', desc: 'Đọc Tuyên ngôn tại Ba Đình.', meaning: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa.', img: 'assets/timeline/1945.jpg' },
  { year: '1946–1954', title: 'Kháng chiến chống Pháp', desc: 'Lãnh đạo toàn quốc kháng chiến.', meaning: 'Bảo vệ nền độc lập.', img: 'assets/timeline/1946-1954.jpg' },
  { year: '1954', title: 'Điện Biên Phủ', desc: 'Chiến thắng lẫy lừng.', meaning: 'Chấn động địa cầu.', img: 'assets/timeline/1954.jpg' },
  { year: '1954–1969', title: 'Xây dựng CNXH', desc: 'Lãnh đạo xây dựng miền Bắc.', meaning: 'Nền tảng cho thống nhất.', img: 'assets/timeline/1954-1969.jpg' },
  { year: '1965–1969', title: 'Di chúc', desc: 'Viết Di chúc để lại cho toàn Đảng, toàn dân.', meaning: 'Tư tưởng lớn cho mai sau.', img: 'assets/timeline/1965-1969.jpg' },
  { year: '1969', title: 'Bác qua đời', desc: 'Ra đi trong niềm tiếc thương vô hạn.', meaning: 'Biểu tượng bất tử.', img: 'assets/timeline/1969.jpg' }
];
function renderTimeline() {
  const timeline = document.querySelector('.timeline');
  timeline.innerHTML = '';
  timelineData.forEach((item, idx) => {
    const side = idx % 2 === 0 ? 'left' : 'right';
    const html = `
      <div class="timeline-item ${side}">
        <div class="timeline-card">
          <img src="${item.img}" alt="${item.title}">
          <div class="timeline-year">${item.year}</div>
          <div class="timeline-title">${item.title}</div>
          <div class="timeline-desc">${item.desc}</div>
          <div class="timeline-meaning">${item.meaning}</div>
        </div>
      </div>
    `;
    timeline.innerHTML += html;
  });
}
function setupTimelineScroll() {
  gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
}
// ===================== MAP DATA =====================
const mapPoints = [
  { name: 'Pháp', x: 0.36, y: 0.32, img: 'assets/map/france.jpg', story: 'Tại Pháp, Bác gửi bản yêu sách đòi quyền tự do cho dân tộc Việt Nam.' },
  { name: 'Anh', x: 0.28, y: 0.28, img: 'assets/map/uk.jpg', story: 'Bác từng làm bồi bàn ở London, học hỏi tinh thần lao động.' },
  { name: 'Nga', x: 0.60, y: 0.18, img: 'assets/map/russia.jpg', story: 'Tại Liên Xô, Bác tiếp thu lý luận cách mạng vô sản.' },
  { name: 'Trung Quốc', x: 0.75, y: 0.38, img: 'assets/map/china.jpg', story: 'Quảng Châu – nơi đào tạo cán bộ cách mạng đầu tiên.' },
  { name: 'Thái Lan', x: 0.72, y: 0.55, img: 'assets/map/thailand.jpg', story: 'Bác hoạt động bí mật, xây dựng phong trào Việt kiều.' },
  { name: 'Mỹ', x: 0.13, y: 0.32, img: 'assets/map/usa.jpg', story: 'Bác từng làm việc tại New York, quan sát xã hội tư bản.' },
  { name: 'Việt Nam', x: 0.80, y: 0.52, img: 'assets/map/vietnam.jpg', story: 'Quê hương – nơi khởi nguồn và trở về.' }
];
function renderMapMarkers() {
  const map = document.querySelector('.map-container');
  const markers = document.querySelector('.map-markers');
  markers.innerHTML = '';
  mapPoints.forEach((pt, idx) => {
    const marker = document.createElement('div');
    marker.className = 'map-marker';
    marker.style.left = (pt.x * 100) + '%';
    marker.style.top = (pt.y * 100) + '%';
    marker.title = pt.name;
    marker.addEventListener('click', () => showMapPopup(pt));
    markers.appendChild(marker);
  });
}
function showMapPopup(pt) {
  const popup = document.getElementById('map-popup');
  const content = popup.querySelector('.popup-content');
  content.innerHTML = `<img src="${pt.img}" alt="${pt.name}"><h3>${pt.name}</h3><p>${pt.story}</p>`;
  popup.classList.add('active');
}
document.querySelector('.close-popup').addEventListener('click', () => {
  document.getElementById('map-popup').classList.remove('active');
});
// ===================== CORE VALUES =====================
const coreValues = [
  { icon: '⭐', title: 'Độc lập dân tộc', quote: 'Không có gì quý hơn độc lập, tự do.' },
  { icon: '🤝', title: 'Đoàn kết quốc tế', quote: 'Đoàn kết, đoàn kết, đại đoàn kết.' },
  { icon: '🌸', title: 'Đạo đức cách mạng', quote: 'Cần, kiệm, liêm, chính, chí công vô tư.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Vì nhân dân', quote: 'Việc gì có lợi cho dân, ta phải hết sức làm.' }
];
function renderCoreValues() {
  const container = document.querySelector('.core-values-cards');
  container.innerHTML = '';
  coreValues.forEach((cv, idx) => {
    const html = `
      <div class="core-value-card" tabindex="0">
        <div class="core-value-inner">
          <div class="core-value-front">
            <div class="core-value-icon" style="font-size:2.5rem;">${cv.icon}</div>
            <div class="core-value-title">${cv.title}</div>
          </div>
          <div class="core-value-back">
            <span>${cv.quote}</span>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
  // Flip effect
  document.querySelectorAll('.core-value-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.addEventListener('keypress', e => { if(e.key==='Enter') card.classList.toggle('flipped'); });
  });
}
// ===================== YOUTH REFLECTIONS =====================
const youthReflections = [
  '“Mỗi lần đọc về hành trình của Bác, em cảm nhận được ý chí và khát vọng lớn lao. Bác là nguồn cảm hứng để em không ngừng học hỏi và cống hiến cho đất nước.”',
  '“Bác Hồ không chỉ là lãnh tụ mà còn là người thầy về đạo đức, nhân cách. Em tự hào là người Việt Nam, càng trân trọng giá trị tự do mà Bác đã dành cả đời theo đuổi.”',
  '“Hành trình của Bác là minh chứng cho sức mạnh của niềm tin và lòng yêu nước. Em mong thế hệ trẻ sẽ tiếp nối lý tưởng ấy bằng hành động thiết thực.”'
];
function renderYouthReflections() {
  const container = document.querySelector('.youth-reflections');
  container.innerHTML = '';
  youthReflections.forEach(txt => {
    container.innerHTML += `<div class="youth-card">${txt}</div>`;
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
