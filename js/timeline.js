// timeline.js - chỉ cho trang timeline.html
// Dùng chung style, chỉ render timeline
const timelineData = [
  { year: 'Năm 1890', title: 'Ngày Bác sinh ra', desc: 'Chủ tịch Hồ Chí Minh sinh ngày 19/5/1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An; tên khai sinh là Nguyễn Sinh Cung. Người lớn lên trong gia đình nhà nho yêu nước, giàu truyền thống văn hóa và tinh thần dân tộc.', meaning: 'Gia đình và quê hương đã hình thành ở Hồ Chí Minh tình yêu nước, lòng nhân ái và ý thức độc lập dân tộc, tạo nền tảng cho tư tưởng cách mạng của Người sau này. Khởi đầu một nhân cách lớn.', img: 'assets/timeline/1890.png' },
  { year: 'Năm 1895 – 1901, 1906 – 1909', title: 'Những năm tháng ở Huế', desc: 'Nguyễn Tất Thành học tập và sinh sống tại Huế, nơi Người tiếp xúc với văn hóa phương Tây và trực tiếp chứng kiến xã hội Việt Nam dưới ách thống trị của thực dân Pháp.', meaning: 'Thời gian ở Huế giúp Người sớm nhận rõ bản chất của chủ nghĩa thực dân và hạn chế của các con đường cứu nước cũ, từ đó hình thành tư duy độc lập và khát vọng tìm con đường cách mạng mới cho dân tộc.', img: 'assets/timeline/hue.png' },
  { year: 'Năm 1911', title: 'Ra đi tìm đường cứu nước', desc: 'Ngày 05/6/1911, với tên Văn Ba, Nguyễn Tất Thành rời Tổ quốc từ bến Nhà Rồng, bắt đầu hành trình tìm con đường giải phóng dân tộc.', meaning: 'Mốc năm 1911 đánh dấu sự chuyển biến từ lòng yêu nước truyền thống sang hành động tìm kiếm con đường cứu nước mới, thể hiện tư duy độc lập, tinh thần dấn thân và khát vọng giải phóng dân tộc bằng con đường khoa học, phù hợp với xu thế thời đại.', img: 'assets/timeline/1911.png' },
  { year: 'Năm 1911 – 1917', title: 'Lao động, học tập và khảo nghiệm thực tiễn thế giới', desc: 'Người vừa lao động kiếm sống vừa đi qua nhiều quốc gia, trực tiếp quan sát đời sống nhân dân lao động và xã hội tư bản, thực dân.', meaning: 'Trải nghiệm thực tiễn phong phú này giúp Người nhận thức bản chất toàn cầu của chủ nghĩa tư bản và chủ nghĩa thực dân, đồng thời hình thành tư tưởng đoàn kết quốc tế của giai cấp công nhân và nhân dân lao động, đặt nền móng cho quan điểm kết hợp cách mạng Việt Nam với cách mạng thế giới.', img: 'assets/timeline/1911-1917.png' },
  { year: 'Năm 1919', title: ' Hoạt động chính trị tại Pháp', desc: 'Nguyễn Ái Quốc tham gia phong trào xã hội chủ nghĩa Pháp và gửi “Bản yêu sách của nhân dân An Nam” tới Hội nghị Versailles.', meaning: ' Sự kiện năm 1919 thể hiện sự trưởng thành về nhận thức chính trị, khẳng định quan điểm: dân tộc bị áp bức phải tự mình đứng lên đấu tranh giành độc lập, không thể trông chờ vào sự ban phát từ các thế lực bên ngoài.', img: 'assets/timeline/1919.png' },
  { year: 'Năm 1920', title: 'Bước ngoặt tư tưởng', desc: 'Nguyễn Ái Quốc tiếp cận Luận cương của V.I. Lênin và tham gia sáng lập Đảng Cộng sản Pháp.', meaning: 'Năm 1920 đánh dấu bước ngoặt căn bản trong tư tưởng Hồ Chí Minh: từ một người yêu nước trở thành người cộng sản Việt Nam đầu tiên, xác lập con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội.', img: 'assets/timeline/1920.png' },
  { year: 'Năm 1921 – 1923', title: 'Hoạt động tại Pháp', desc: 'Nguyễn Ái Quốc tham gia sáng lập Hội Liên hiệp các dân tộc thuộc địa và xuất bản báo Le Paria.', meaning: ' Giai đoạn này đánh dấu sự phát triển rõ nét tư tưởng giải phóng dân tộc gắn liền với giải phóng con người, đồng thời hình thành quan điểm đoàn kết quốc tế của các dân tộc bị áp bức.', img: 'assets/timeline/1921-1923.png' },
  { year: 'Năm 1923 – 1924', title: 'Hoạt động tại Liên Xô', desc: 'Người học tập lý luận Mác – Lênin và hoạt động trong Quốc tế Cộng sản.', meaning: 'Thời kỳ này giúp Người củng cố vững chắc thế giới quan và phương pháp luận Mác – Lênin, khẳng định con đường cách mạng vô sản là tất yếu đối với các dân tộc thuộc địa.', img: 'assets/timeline/1923-1924.png' },
  { year: 'Năm 1925', title: 'Hoạt động tại Quảng Châu (Trung Quốc)', desc: 'Nguyễn Ái Quốc xuất bản Bản án chế độ thực dân Pháp và thành lập Hội Việt Nam Cách mạng Thanh niên.', meaning: ' Mốc năm 1925 thể hiện sự chuyển biến từ truyền bá tư tưởng sang tổ chức và chuẩn bị lực lượng, khẳng định vai trò quyết định của xây dựng tổ chức và đào tạo cán bộ.', img: 'assets/timeline/1925.png' },
  { year: 'Năm 1927', title: 'Xuất bản “Đường Kách mệnh”', desc: 'Tác phẩm trình bày những vấn đề cơ bản về đường lối và tổ chức cách mạng Việt Nam.', meaning: ' “Đường Kách mệnh” đặt nền móng tư tưởng và đường lối cách mạng Việt Nam, thể hiện sự vận dụng sáng tạo chủ nghĩa Mác – Lênin vào điều kiện cụ thể của Việt Nam.', img: 'assets/timeline/1927.png' },
  { year: 'Năm 1930', title: 'Thành lập Đảng Cộng sản Việt Nam', desc: 'Nguyễn Ái Quốc chủ trì hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.', meaning: 'Sự kiện này đánh dấu sự hoàn thiện tư tưởng Hồ Chí Minh về Đảng và đường lối cách mạng, chấm dứt khủng hoảng về tổ chức và lãnh đạo.', img: 'assets/timeline/1930.png' },
  { year: 'Năm 1930 – 1940', title: 'Hoạt động cách mạng ở nước ngoài', desc: 'Người tiếp tục chỉ đạo phong trào cách mạng Việt Nam và giữ liên hệ với Quốc tế Cộng sản.', meaning: 'Giai đoạn này thể hiện tư tưởng kiên định mục tiêu cách mạng, đồng thời đề cao tinh thần độc lập, tự chủ và sáng tạo.', img: 'assets/timeline/1930-1940.png' },
  { year: 'Năm 1941', title: 'Trở về Tổ quốc – Hoạt động tại Pác Bó', desc: 'Sau 30 năm hoạt động ở nước ngoài, Nguyễn Ái Quốc trở về nước, trực tiếp lãnh đạo cách mạng Việt Nam.', meaning: 'Khẳng định tư tưởng gắn lý luận với thực tiễn Việt Nam, lấy giải phóng dân tộc làm nhiệm vụ trung tâm.', img: 'assets/timeline/1941.png' },
  { year: 'Năm 1941', title: 'Thành lập Mặt trận Việt Minh', desc: 'Hội nghị Trung ương 8 quyết định thành lập Mặt trận Việt Nam Độc lập Đồng minh.', meaning: 'Thể hiện tư tưởng đại đoàn kết toàn dân tộc, coi đoàn kết là sức mạnh quyết định thắng lợi của cách mạng.', img: 'assets/timeline/vietminh.png' },
  { year: 'Năm 1942 – 1943', title: 'Viết “Nhật ký trong tù”', desc: 'Trong thời gian bị giam giữ tại Trung Quốc, Hồ Chí Minh sáng tác Nhật ký trong tù.', meaning: 'Thể hiện sâu sắc chủ nghĩa nhân đạo cách mạng, ý chí vượt lên hoàn cảnh và niềm tin vào con người.', img: 'assets/timeline/1942-1943.png' },
  { year: 'Năm 1945', title: 'Tuyên ngôn Độc lập', desc: 'Ngày 02/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.', meaning: 'Là sự kết tinh và hiện thực hóa hoàn chỉnh tư tưởng Hồ Chí Minh về giải phóng dân tộc và quyền làm chủ của nhân dân.', img: 'assets/timeline/1945.png' },
  { year: 'Năm 1946 – 1954', title: 'Kháng chiến chống thực dân Pháp', desc: 'Hồ Chí Minh cùng Đảng lãnh đạo toàn dân tiến hành cuộc kháng chiến toàn dân, toàn diện.', meaning: 'Làm nổi bật tư tưởng chiến tranh nhân dân và quan điểm độc lập dân tộc là thiêng liêng, bất khả xâm phạm.', img: 'assets/timeline/1946-1954.png' },
  { year: 'Năm 1954', title: 'Chiến thắng Điện Biên Phủ', desc: 'Quân và dân Việt Nam giành thắng lợi quyết định, miền Bắc được giải phóng.', meaning: 'Khẳng định tính đúng đắn và sức sống của tư tưởng Hồ Chí Minh về kết hợp sức mạnh dân tộc với sức mạnh thời đại.', img: 'assets/timeline/1954.png' },
  { year: 'Năm 1954 – 1969', title: 'Xây dựng CNXH và thống nhất đất nước', desc: 'Lãnh đạo xây dựng miền Bắc xã hội chủ nghĩa và đấu tranh giải phóng miền Nam.', meaning: 'Thể hiện sâu sắc tư tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội và vai trò quyết định của con người.', img: 'assets/timeline/1954-1969.png' },
  { year: 'Năm 1965 – 1969', title: 'Viết Di chúc', desc: 'Chủ tịch Hồ Chí Minh viết Di chúc trong những năm cuối đời.', meaning: 'Di chúc là sự kết tinh cao nhất tư tưởng, đạo đức và phong cách Hồ Chí Minh, mang giá trị nhân văn sâu sắc.', img: 'assets/timeline/1965-1969.png' },
  { year: 'Năm 1969', title: 'Chủ tịch Hồ Chí Minh qua đời', desc: 'Ngày 02/9/1969, Chủ tịch Hồ Chí Minh qua đời tại Hà Nội trong niềm tiếc thương vô hạn.', meaning: 'Tư tưởng Hồ Chí Minh trở thành nền tảng tư tưởng và kim chỉ nam cho mọi hành động của Đảng và cách mạng Việt Nam.', img: 'assets/timeline/1969.png' }
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
          <div class="timeline-divider"></div>
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
document.addEventListener('DOMContentLoaded', function () {
  renderTimeline();
  setupTimelineScroll();
});

// --<div class="timeline-item ${side}" data-year="${item.year}">
