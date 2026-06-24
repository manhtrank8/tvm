const fs = require('fs')

const fixes = [
  // Hero
  ['S?n s�ng nh?n d? ?n', 'Sẵn sàng nhận dự án'],
  ['Tr?n Van M?nh', 'Trần Văn Mạnh'],
  ['N?i tu duy c�ng nghi?p v� logic m�y m�c h�a quy?n c�ng giao di?n ph?n m?m tr?c quan.', 'Nơi tư duy công nghiệp và logic máy móc hòa quyện cùng giao diện phần mềm trực quan.'],
  ['Kh�m Ph� D? ?n', 'Khám Phá Dự Án'],
  ['Li�n H? Ngay', 'Liên Hệ Ngay'],
  ['Nam KN', 'Năm KN'],
  ['D? ?n', 'Dự án'],
  ['Kh�ch h�ng', 'Khách hàng'],
  ['Kh?m ph? d? ?n', 'Khám phá dự án'],
  ['Li�n h? ngay', 'Liên hệ ngay'],
  // Ticker
  // Expertise
  ['H? sinh th?i k? nang', 'Hệ sinh thái kỹ năng'],
  ['Chuy?n M?n & C?ng Ngh?', 'Chuyên Môn & Công Nghệ'],
  ['N?n t?ng v?ng ch?c t? ph?n c?ng c?ng nghi?p d?n h? th?ng ph?n m?m d?m m?y.', 'Nền tảng vững chắc từ phần cứng công nghiệp đến hệ thống phần mềm đám mây.'],
  ['T? ?ng H?a', 'Tự Động Hóa'],
  ["PLC, robot delta t?c d? cao, bang chuy?n, case packer & h? th?ng ph?n lo?i th?ng minh.", 'PLC, robot delta tốc độ cao, băng chuyền, case packer & hệ thống phân loại thông minh.'],
  ["X? l? ?nh c?ng nghi?p, OCR, ph?t hi?n l?i v?i Cognex & Keyence.", 'Xử lý ảnh công nghiệp, OCR, phát hiện lỗi với Cognex & Keyence.'],
  ["?ng d?ng React, Electron, Node.js chuy?n nghi?p.", 'Ứng dụng React, Electron, Node.js chuyên nghiệp.'],
  ["Qu?n l? b?o tr? thi?t b? v? gi?m s?t di?n nang to?n nh? m?y theo th?i gian th?c.", 'Quản lý bảo trì thiết bị và giám sát điện năng toàn nhà máy theo thời gian thực.'],
  ["K?t n?i m?y m?c l?n cloud, dashboard realtime v?i MQTT & Firebase.", 'Kết nối máy móc lên cloud, dashboard realtime với MQTT & Firebase.'],
  // Projects
  ['Robot Delta & ??ng Th?ng', 'Robot Delta & Đóng Thùng'],
  ['Automation ? Robotics', 'Automation · Robotics'],
  ["H? th?ng g?p th? t? d?ng b?ng Robot Delta t?c d? cao, t?ch h?p Case Packer t? d?ng kh?p k?n, n?ng cao nang su?t 300%.", 'Hệ thống gắp thả tự động bằng Robot Delta tốc độ cao, tích hợp Case Packer tự động khép kín, nâng cao năng suất 300%.'],
  ['Machine Vision: OCR & L?i', 'Machine Vision: OCR & Lỗi'],
  ['AI ? Machine Vision', 'AI · Machine Vision'],
  ["Th? gi?c m?y t?nh c?ng nghi?p nh?n di?n, d?c OCR m? v?ch/date code, t? d?ng lo?i b? s?n ph?m l?i v?i d? ch?nh x?c 99.8%.", 'Thị giác máy tính công nghiệp nhận diện, đọc OCR mã vạch/date code, tự động loại bỏ sản phẩm lỗi với độ chính xác 99.8%.'],
  ['CMMS - Qu?n l? B?o Tr?', 'CMMS - Quản lý Bảo Trì'],
  ["S? h?a quy tr?nh qu?n l? t?i s?n, b?o tr? thi?t b? v? theo d?i KPI nh?n s?. Dashboard tr?c quan realtime.", 'Số hóa quy trình quản lý tài sản, bảo trì thiết bị và theo dõi KPI nhân sự. Dashboard trực quan realtime.'],
  ['EPMS - Gi?m S?t ?i?n Nang', 'EPMS - Giám Sát Điện Năng'],
  ['IoT ? Energy', 'IoT · Energy'],
  ["Gi?i ph?p IoT gi?m s?t di?n nang to?n nh? m?y theo th?i gian th?c, b?o c?o ph?n t?ch t?i uu chi ph? v?n h?nh.", 'Giải pháp IoT giám sát điện năng toàn nhà máy theo thời gian thực, báo cáo phân tích tối ưu chi phí vận hành.'],
  ['Ph?n Lo?i S?n Ph?m T? ?ng', 'Phân Loại Sản Phẩm Tự Động'],
  ["H? th?ng ph?n lo?i buu ki?n t? d?ng v?i bang t?i d?ng co, c?n d?ng t?c d? cao v? ph?n m?m qu?n l? kho t?ch h?p.", 'Hệ thống phân loại bưu kiện tự động với băng tải động cơ, cân động tốc độ cao và phần mềm quản lý kho tích hợp.'],
  ['Xem chi ti?t', 'Xem chi tiết'],
  // About
  ['K? s? t? d?ng h?a', 'Kỹ sư tự động hóa'],
  ['& ph?t tri?n ph?n m?m', '& phát triển phần mềm'],
  ["V?i h?n 8 nam kinh nghi?m trong ng?nh t? d?ng h?a c?ng nghi?p, t?i chuy?n t?ch h?p h? th?ng robot, PLC v? ph?t tri?n ph?n m?m qu?n tr? doanh nghi?p.", 'Với hơn 8 năm kinh nghiệm trong ngành tự động hóa công nghiệp, tôi chuyên tích hợp hệ thống robot, PLC và phát triển phần mềm quản trị doanh nghiệp.'],
  ["T?ng tri?n khai d? ?n t?i c?c nh? m?y l?n t?i Vi?t Nam, mang l?i gi?i ph?p t?i uu h?a quy tr?nh s?n xu?t v? gi?m chi ph? v?n h?nh.", 'Từng triển khai dự án tại các nhà máy lớn tại Việt Nam, mang lại giải pháp tối ưu hóa quy trình sản xuất và giảm chi phí vận hành.'],
  ['G?i ngay', 'Gọi ngay'],
  ['Nang l?c chuy?n m?n', 'Năng lực chuyên môn'],
  // Contact
  ["Li?n h?", "Liên hệ"],
  ["H?y c?ng x?y d?ng", "Hãy cùng xây dựng"],
  ["di?u g? tuy?t v?i", "điều gì đó tuyệt vời"],
  ["Li?n h? ngay d? th?o lu?n v? gi?i ph?p t?i uu cho doanh nghi?p c?a b?n.", "Liên hệ ngay để thảo luận về giải pháp tối ưu cho doanh nghiệp của bạn."],
  ["G?i ngay", "Gọi ngay"],
  ["G?i Email", "Gửi Email"],
  // Navbar
  ["K? Nang", "Kỹ Năng"],
  ["D? ?n", "Dự Án"],
  ["V? T?i", "Về Tôi"],
  ["Li?n H?", "Liên Hệ"],
  ["Li?n H?", "Liên Hệ"],
  // Footer
  ["Tr?n Van M?nh", "Trần Văn Mạnh"],
  // Roles
  ["PLC & T? D?ng H?a", "PLC & Automation"],
  // Ticker  
  // Skills about
  ["PLC / HMI", "PLC / HMI"],
  ["Robot & Vision", "Robot & Vision"],
]

let c = fs.readFileSync('src/App.jsx', 'utf8')

fixes.forEach(([from, to]) => {
  c = c.split(from).join(to)
})

// Also fix remaining garbled chars using regex patterns
// Fix common Vietnamese diacritics that got garbled

fs.writeFileSync('src/App.jsx', c, 'utf8')
console.log('Encoding fix applied')

// Show first few Vietnamese lines to verify
const lines = c.split('\n')
console.log('Line 96:', lines[95].substring(50, 150))
console.log('Line 128:', lines[127].substring(20, 120))
