// timeline.js - chỉ cho trang timeline.html
// Dùng chung style, chỉ render timeline
const timelineData = [
  { year: '1890', title: 'Ngày Bác sinh ra', desc: 'Nguyễn Sinh Cung chào đời tại Nghệ An.', meaning: 'Khởi đầu một nhân cách lớn.', img: 'assets/timeline/1890.png' },
  { year: '1895 – 1901, 1906 – 1909', title: 'Ở Huế', desc: ' Sống và học tập tại Huế. Chứng kiến sự tàn bạo của thực dân và sự thất bại của các phong trào yêu nước cũ.', meaning: 'Hình thành ý chí cứu nước.', img: 'assets/timeline/hue.png' },
  { year: '1911', title: 'Ra đi tìm đường cứu nước', desc: 'Lên tàu Amiral Latouche-Tréville.', meaning: 'Bước ngoặt lịch sử.', img: 'assets/timeline/1911.png' },
  { year: '1911 – 1917', title: 'Lao động & khảo nghiệm thế giới', desc: 'Làm việc tại nhiều nước.', meaning: 'Trải nghiệm thực tiễn.', img: 'assets/timeline/1911-1917.png' },
  { year: '1919', title: 'Hoạt động tại Pháp', desc: 'Gửi bản yêu sách tới Hội nghị Versailles.', meaning: 'Khẳng định quyền dân tộc.', img: 'assets/timeline/1919.png' },
  { year: '1920', title: 'Bước ngoặt tư tưởng', desc: 'Gia nhập Đảng Xã hội Pháp.', meaning: 'Chọn con đường cách mạng vô sản.', img: 'assets/timeline/1920.png' },
  { year: '1921 – 1923', title: 'Hoạt động tại Pháp', desc: 'Thành lập Hội Liên hiệp thuộc địa.', meaning: 'Kết nối các dân tộc bị áp bức.', img: 'assets/timeline/1921-1923.png' },
  { year: '1923 – 1924', title: 'Liên Xô', desc: 'Học tập, hoạt động quốc tế.', meaning: 'Tiếp thu lý luận cách mạng.', img: 'assets/timeline/1923-1924.png' },
  { year: '1925', title: 'Quảng Châu', desc: 'Thành lập Hội Việt Nam Cách mạng Thanh niên.', meaning: 'Đào tạo cán bộ đầu tiên.', img: 'assets/timeline/1925.png' },
  { year: '1927', title: '“Đường Kách mệnh”', desc: 'Xuất bản tác phẩm lý luận đầu tiên.', meaning: 'Kim chỉ nam cách mạng.', img: 'assets/timeline/1927.png' },
  { year: '1930', title: 'Thành lập ĐCSVN', desc: 'Hợp nhất các tổ chức cộng sản.', meaning: 'Ra đời Đảng Cộng sản Việt Nam.', img: 'assets/timeline/1930.png' },
  { year: '1930 – 1940', title: 'Hoạt động nước ngoài', desc: 'Tiếp tục hoạt động bí mật.', meaning: 'Kiên trì lý tưởng.', img: 'assets/timeline/1930-1940.png' },
  { year: '1941', title: 'Trở về Pác Bó', desc: 'Lãnh đạo cách mạng trong nước.', meaning: 'Chuẩn bị tổng khởi nghĩa.', img: 'assets/timeline/1941.png' },
  { year: '1941', title: 'Việt Minh', desc: 'Thành lập Mặt trận Việt Minh.', meaning: 'Đoàn kết toàn dân.', img: 'assets/timeline/vietminh.png' },
  { year: '1942 – 1943', title: 'Nhật ký trong tù', desc: 'Bị bắt, sáng tác thơ.', meaning: 'Tinh thần thép.', img: 'assets/timeline/1942-1943.png' },
  { year: '1945', title: 'Tuyên ngôn Độc lập', desc: 'Đọc Tuyên ngôn tại Ba Đình.', meaning: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa.', img: 'assets/timeline/1945.png' },
  { year: '1946 – 1954', title: 'Kháng chiến chống Pháp', desc: 'Lãnh đạo toàn quốc kháng chiến.', meaning: 'Bảo vệ nền độc lập.', img: 'assets/timeline/1946-1954.png' },
  { year: '1954', title: 'Điện Biên Phủ', desc: 'Chiến thắng lẫy lừng.', meaning: 'Chấn động địa cầu.', img: 'assets/timeline/1954.png' },
  { year: '1954 – 1969', title: 'Xây dựng CNXH', desc: 'Lãnh đạo xây dựng miền Bắc.', meaning: 'Nền tảng cho thống nhất.', img: 'assets/timeline/1954-1969.png' },
  { year: '1965 – 1969', title: 'Di chúc', desc: 'Viết Di chúc để lại cho toàn Đảng, toàn dân.', meaning: 'Tư tưởng lớn cho mai sau.', img:'assets/timeline/1965-1969.png' },
  { year: '1969', title: 'Bác qua đời', desc: 'Ra đi trong niềm tiếc thương vô hạn.', meaning: 'Biểu tượng bất tử.', img: 'assets/timeline/1969.png' }
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
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
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
document.addEventListener('DOMContentLoaded', function() {
  renderTimeline();
  setupTimelineScroll();
});

// --<div class="timeline-item ${side}" data-year="${item.year}">
