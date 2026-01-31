// core-values.js - chỉ cho trang core-values.html
// const coreValues = [
//   { icon: '⭐', title: 'Độc lập dân tộc', quote: 'Không có gì quý hơn độc lập, tự do.' },
//   { icon: '🤝', title: 'Đoàn kết quốc tế', quote: 'Đoàn kết, đoàn kết, đại đoàn kết.' },
//   { icon: '🌸', title: 'Đạo đức cách mạng', quote: 'Cần, kiệm, liêm, chính, chí công vô tư.' },
//   { icon: '👨‍👩‍👧‍👦', title: 'Vì nhân dân', quote: 'Việc gì có lợi cho dân, ta phải hết sức làm.' }
// ];
// function renderCoreValues() {
//   const container = document.querySelector('.core-values-cards');
//   container.innerHTML = '';
//   coreValues.forEach((cv, idx) => {
//     const html = `
//       <div class="core-value-card" tabindex="0">
//         <div class="core-value-inner">
//           <div class="core-value-front">
//             <div class="core-value-icon" style="font-size:2.5rem;">${cv.icon}</div>
//             <div class="core-value-title">${cv.title}</div>
//           </div>
//           <div class="core-value-back">
//             <span>${cv.quote}</span>
//           </div>
//         </div>
//       </div>
//     `;
//     container.innerHTML += html;
//   });
//   // Flip effect
//   document.querySelectorAll('.core-value-card').forEach(card => {
//     card.addEventListener('click', () => card.classList.toggle('flipped'));
//     card.addEventListener('keypress', e => { if(e.key==='Enter') card.classList.toggle('flipped'); });
//   });
// }
// document.addEventListener('DOMContentLoaded', function() {
//   renderCoreValues();
// });


// core-values.js
const coreValues = [
  { img: 'assets/core-values/independence.png', title: 'ĐỘC LẬP DÂN TỘC & CHỦ NGHĨA XÃ HỘI', quote: '<b>"Không có gì quý hơn độc lập tự do."</b><br>(Trích Lời kêu gọi chống Mỹ cứu nước, 17/7/1966)' },
  { img: 'assets/core-values/unity.png', title: 'ĐOÀN KẾT TOÀN DÂN & QUỐC TẾ', quote: '<b>"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."</b><br>(Trích bài nói tại Đại hội đại biểu Mặt trận Tổ quốc Việt Nam, 1955)' },
  { img: 'assets/core-values/morality.png', title: 'CẦN - KIỆM - LIÊM - CHÍNH', quote: '<b>" Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì tài giỏi mấy cũng không lãnh đạo được nhân dân."</b><br>(Trích tác phẩm "Sửa đổi lối làm việc", 1947)' },
  { img: 'assets/core-values/people.png', title: 'LẤY DÂN LÀM GỐC', quote: '<b>"Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân."</b><br>(Trích bài viết trên báo Nhân dân, 1954)' }
];

function renderCoreValues() {
  const container = document.querySelector('.core-values-cards');
  container.innerHTML = '';

  coreValues.forEach(cv => {
    container.innerHTML += `
      <div class="core-value-card" tabindex="0">
        <div class="core-value-inner">
          <div class="core-value-front">
            <img src="${cv.img}" alt="${cv.title}" class="core-value-img">
            <div class="core-value-title">${cv.title}</div>
          </div>
          <div class="core-value-back">
            <span>${cv.quote}</span>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelectorAll('.core-value-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.addEventListener('keypress', e => {
      if (e.key === 'Enter') card.classList.toggle('flipped');
    });
  });
}

document.addEventListener('DOMContentLoaded', renderCoreValues);


// youth.js - chỉ cho trang youth.html
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
    document.addEventListener('DOMContentLoaded', function() {
    renderYouthReflections();
    });


    