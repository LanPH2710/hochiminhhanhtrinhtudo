// 1️⃣ Dữ liệu hành trình
const journeyPoints = [
  {
    id: 1,
    place: "Bến Cảng Nhà Rồng, Sài Gòn (Việt Nam)",
    coords: [10.768, 106.705],
    time: "05/06/1911",
    alias: "Văn Ba",
    context: "Pháp hoàn thành bình định, bắt đầu khai thác thuộc địa lần 1...",
    events: [
      "Lấy tên Văn Ba, xin làm phụ bếp trên tàu Amiral Latouche-Tréville",
      "Rời cảng Nhà Rồng với hai bàn tay trắng"
    ],
    meaning: "Xác định hướng đi mới: tìm hiểu phương Tây để về giúp nước.",
    image: "assets/nharong1911.png"
  },
  {
    id: 2,
    place: "London (Anh)",
    coords: [51.5074, -0.1278],
    time: "1913 – 1917",
    alias: "Nguyễn Tất Thành",
    context: "Trung tâm đế chế Anh, đời sống công nhân cực khổ...",
    events: [
      "Làm nhiều nghề: quét tuyết, đốt lò, phụ bếp",
      "Tham gia Hội Lao động hải ngoại",
      "Ủng hộ các cuộc bãi công công nhân"
    ],
    meaning: "Ở đâu nhân dân lao động cũng là bạn, chủ nghĩa đế quốc là thù.",
    image: "assets/london.png"
  },
  {
    id: 3,
    place: "Paris (Pháp)",
    coords: [48.8566, 2.3522],
    time: "1917 – 1923",
    alias: "Nguyễn Ái Quốc",
    context: "Sau Thế chiến I, trật tự Versailles được thiết lập. Pháp nới lỏng kiểm soát tại chính quốc nhưng tiếp tục siết chặt ách thống trị tại các thuộc địa.",
    events: [
      "1919: Gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Versailles",
      "1920: Đọc Luận cương Lênin trên báo L'Humanité",
      "12/1920: Dự Đại hội Tour, bỏ phiếu tán thành Quốc tế III",
      "1921: Thành lập Hội Liên hiệp các dân tộc thuộc địa",
      "1922: Ra báo Le Paria (Người cùng khổ)"
    ],
    meaning: "Chuyển biến căn bản từ người yêu nước trở thành người chiến sĩ cộng sản, tìm ra con đường cứu nước đúng đắn cho dân tộc Việt Nam.",
    image: "assets/paris.png"
  },
  {
    id: 4,
    place: "Moscow (Liên Xô)",
    coords: [55.7558, 37.6173],
    time: "1923 – 1924",
    alias: "Chen Vang",
    context: "Liên Xô bước vào thời kỳ xây dựng chủ nghĩa xã hội đầu tiên. Quốc tế Cộng sản bắt đầu chú trọng vấn đề cách mạng tại các nước phương Đông và thuộc địa.",
    events: [
      "1923: Tham dự Hội nghị Quốc tế Nông dân",
      "1924: Dự Đại hội V Quốc tế Cộng sản",
      "Phát biểu phê phán các Đảng Cộng sản phương Tây chưa chú trọng cách mạng thuộc địa",
      "Học tập tại Trường Đại học Phương Đông của Quốc tế Cộng sản"
    ],
    meaning: "Hệ thống hóa lý luận cách mạng vô sản và phương pháp xây dựng Đảng kiểu mới cho phong trào cách mạng Việt Nam.",
    image: "assets/moscow.png"
  },
  {
    id: 5,
    place: "Quảng Châu (Trung Quốc)",
    coords: [23.1291, 113.2644],
    time: "1924 – 1927",
    alias: "Lý Thụy",
    context: "Quốc – Cộng hợp tác tại Trung Quốc. Nhiều thanh niên Việt Nam yêu nước tập trung tại Quảng Châu để tìm đường cứu nước.",
    events: [
      "1925: Thành lập Hội Việt Nam Cách mạng Thanh niên",
      "Mở các lớp huấn luyện chính trị cho khoảng 300 học viên",
      "1927: Xuất bản tác phẩm Đường Kách mệnh"
    ],
    meaning: "Chuẩn bị đầy đủ về lý luận, tổ chức và cán bộ cho sự ra đời của Đảng Cộng sản Việt Nam.",
    image: "assets/guangzhou.png"
  },
  {
    id: 6,
    place: "Xiêm (Thái Lan)",
    coords: [13.7563, 100.5018],
    time: "1928 – 1929",
    alias: "Thầu Chín",
    context: "Thực dân Pháp truy đuổi ráo riết tại Trung Quốc. Phong trào yêu nước trong cộng đồng Việt kiều tại Thái Lan còn mang tính tự phát.",
    events: [
      "Xây dựng các bản làng Việt kiều như Bản May, Thà Uông",
      "Mở trường học, dạy chữ Quốc ngữ cho con em Việt kiều",
      "Xuất bản báo Thân ái để tuyên truyền đoàn kết quốc tế",
      "Cải tổ các hội thân hữu thành tổ chức cách mạng bí mật"
    ],
    meaning: "Thâm nhập sâu vào thực tiễn quần chúng, xây dựng khối đại đoàn kết và căn cứ lòng dân cho cách mạng.",
    image: "assets/thailand.png"
  },
  {
    id: 7,
    place: "Pác Bó (Cao Bằng, Việt Nam)",
    coords: [22.8465, 106.3346],
    time: "28/01/1941",
    alias: "Già Thu",
    context: "Nhật Bản tiến vào Đông Dương, Thế chiến II lan rộng. Pháp suy yếu nghiêm trọng, thời cơ giải phóng dân tộc đang đến gần.",
    events: [
      "Vượt cột mốc 108 tại biên giới Việt – Trung để về nước",
      "05/1941: Chủ trì Hội nghị Trung ương 8 tại lán Khuổi Nặm",
      "Quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
      "Thành lập Mặt trận Việt Minh"
    ],
    meaning: "Trực tiếp lãnh đạo cách mạng trong nước, chuyển hướng chiến lược đúng đắn, đưa cách mạng Việt Nam đến thắng lợi năm 1945.",
    image: "assets/pacbo1941.png"
  }

];


const map = L.map("journey-map", {
  minZoom: 2,
  maxZoom: 5,
  worldCopyJump: false,   // không nhảy sang bản đồ khác
  maxBoundsViscosity: 1.0 // khóa biên
}).setView([20, 0], 2);

// Giới hạn biên trái – phải của thế giới
map.setMaxBounds([
  [-85, -180],
  [85, 180]
]);

L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png",
  {
    attribution: "© CARTO © OpenStreetMap",
    noWrap: true,        // ⭐ CỰC KỲ QUAN TRỌNG: không lặp bản đồ
  }
).addTo(map);
// 3️⃣ Icon marker số
function createNumberIcon(num) {
  return L.divIcon({
    className: "custom-marker",
    html: `<div class="marker-circle">${num}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
}


journeyPoints.forEach(point => {
  const marker = L.marker(point.coords, {
    icon: createNumberIcon(point.id)
  }).addTo(map);

  marker.on("click", () => {
    // 🔥 Map bay đến địa điểm
    map.flyTo(point.coords, 4, {
      duration: 1.2,
      easeLinearity: 0.25
    });

    // Mở panel
    openPanel(point);

    // Highlight marker
    document.querySelectorAll(".marker-circle").forEach(m => {
      m.classList.remove("active");
    });

    marker.getElement().querySelector(".marker-circle").classList.add("active");
  });
});


function openPanel(data) {
  const panel = document.getElementById("infoPanel");
  const content = document.getElementById("panelContent");

  content.innerHTML = `
    <div class="panel-header">
      <h2>${data.place}</h2>
      <p class="panel-time">📅 ${data.time}</p>
    </div>

    <div class="panel-image">
      <img src="${data.image}" alt="${data.place}">
    </div>

    <div class="panel-body">
      <p><strong>Bí danh:</strong> ${data.alias}</p>

      <h3>📍 Sự kiện chính</h3>
      <ul>
        ${data.events.map(e => `<li>${e}</li>`).join("")}
      </ul>

      <h3>📚 Bối cảnh lịch sử</h3>
      <p>${data.context}</p>

      <h3>🎯 Ý nghĩa</h3>
      <p>${data.meaning}</p>
    </div>
  `;

  panel.classList.add("open");
}
function closePanel() {
  document.getElementById("infoPanel").classList.remove("open");
}
