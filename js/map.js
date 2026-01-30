// map.js - chỉ cho trang map.html
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
document.addEventListener('DOMContentLoaded', function() {
  renderMapMarkers();
  document.querySelector('.close-popup').addEventListener('click', () => {
    document.getElementById('map-popup').classList.remove('active');
  });
});
