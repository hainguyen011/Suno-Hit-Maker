# 🎵 VSunoMaker.AI

> **Trình Sáng Tác Nhạc AI Thông Minh cho Suno.com**

**VSunoMaker.AI** là Chrome Extension chuyên nghiệp giúp tự động hóa hoàn toàn quy trình sáng tác âm nhạc trên nền tảng Suno.com. Được trang bị công nghệ AI tiên tiến (Google Gemini), extension mang đến khả năng sáng tạo nội dung nhạc chuyên sâu với tư duy nhạc lý đẳng cấp, giúp bạn tạo ra những bản hit chất lượng cao chỉ trong vài giây.

---

## ✨ Tính Năng Nổi Bật

### 🤖 **AI-Powered Music Creation**
- **Sáng Tác Tự Động**: AI tự động tạo lời bài hát (Lyrics) và phong cách âm nhạc (Style) dựa trên ý tưởng của bạn
- **Tư Duy Nhạc Lý Chuyên Sâu**: Sử dụng Google Gemini API để phân tích và tạo nội dung với chất lượng chuyên nghiệp
- **Hỗ Trợ Đa Ngôn Ngữ**: Tạo nhạc bằng tiếng Việt và nhiều ngôn ngữ khác

### 🎨 **Tùy Chỉnh Chuyên Sâu**

#### **Chế Độ Sáng Tác Linh Hoạt**
- **Concept Mode (Chế độ Ý tưởng)**: Chỉ cần mô tả ý tưởng, AI sẽ tự động tạo toàn bộ
- **Lyrics Mode (Chế độ Lời bài hát)**: Nhập sẵn lời, AI sẽ tối ưu và tạo Style phù hợp
- **Instrumental Mode**: Tạo nhạc không lời chuyên nghiệp

#### **Tùy Chỉnh Giọng Hát**
- **Giới Tính**: Nam (Male) / Nữ (Female) / Song ca (Duet) / Ngẫu nhiên
- **Vùng Miền**: Chuẩn / Miền Bắc / Miền Trung / Miền Nam
- **Nghệ Sĩ Truyền Cảm Hứng**: Mô phỏng phong cách của nghệ sĩ yêu thích

#### **Thư Viện Vibe Phong Phú**
- V-Pop Viral
- Indie Chill
- Vinahouse Hit
- US-UK Modern Pop
- K-Pop Star
- Lo-fi HipHop
- EDM Festival
- Rock Ballad
- **Custom Vibe**: Tự định nghĩa phong cách riêng

### 🎯 **Studio Mode - Inspector Tool**
- **Element Selector**: Công cụ chọn phần tử thông minh để "chỉ định" chính xác vị trí ô Lyrics và Style
- **Auto-Adapt**: Tự động thích ứng với thay đổi giao diện của Suno.com
- **Visual Feedback**: Highlight ô đã chọn với viền sáng chuyên nghiệp

### ⚡ **Quick Regenerate**
- **In-Place Editing**: Nút Regenerate xuất hiện ngay trên ô nhập liệu
- **Selective Update**: Chỉ tái tạo Lyrics hoặc Style mà không ảnh hưởng phần còn lại
- **One-Click Refresh**: Làm mới nội dung chỉ với một cú click

### 🎛️ **Studio Advanced Features**

#### **Custom AI Persona**
- Tùy chỉnh nhân cách AI theo phong cách sáng tác riêng
- Định nghĩa chuyên môn và tone giọng của AI

#### **Structure Builder**
- Xây dựng cấu trúc bài hát tùy chỉnh: Intro → Verse → Chorus → Bridge → Drop → Outro
- Drag & Drop để sắp xếp các phần

#### **See The Sound**
- Upload ảnh để AI phân tích và tạo nhạc dựa trên cảm xúc hình ảnh
- Chuyển đổi cảm xúc thị giác thành âm nhạc

#### **Style Fusion**
- Lai tạo 2 phong cách âm nhạc khác nhau
- Tạo ra âm thanh độc đáo, mới lạ

#### **Clone The Vibe**
- Phân tích bài hát có sẵn để "dịch ngược" phong cách
- Tạo bài hát mới với cùng vibe

### 📊 **History & Management**
- Lưu trữ lịch sử sáng tác
- Xem lại và tái sử dụng các concept đã tạo

---

## 🚀 Hướng Dẫn Cài Đặt

### **Yêu Cầu Hệ Thống**
- Google Chrome (phiên bản 88 trở lên) hoặc các trình duyệt Chromium-based (Edge, Brave, Opera...)
- Kết nối Internet ổn định
- Tài khoản Google AI Studio (để lấy Gemini API Key)

### **Các Bước Cài Đặt**

#### **Bước 1: Tải Source Code**
```bash
# Clone repository từ GitHub
git clone https://github.com/hainguyen011/Suno-Hit-Maker.git

# Hoặc tải file ZIP và giải nén
```

#### **Bước 2: Cài Đặt Extension**

1. Mở trình duyệt **Google Chrome**
2. Truy cập: `chrome://extensions/`
3. Bật **Developer mode** (góc trên bên phải)
   
   ![Developer Mode](https://i.imgur.com/example.png)

4. Click nút **"Load unpacked"** (Tải tiện ích đã giải nén)
5. Chọn thư mục `Suno-Hit-Maker` (thư mục chứa file `manifest.json`)
6. Extension sẽ xuất hiện trong danh sách với tên **"VSunoMaker AI"**

#### **Bước 3: Lấy Gemini API Key**

1. Truy cập: [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Đăng nhập bằng tài khoản Google
3. Click **"Create API Key"**
4. Copy API Key vừa tạo

#### **Bước 4: Cấu Hình Extension**

1. Click vào icon **VSunoMaker.AI** trên thanh công cụ trình duyệt
2. Chuyển sang tab **"Cài đặt"** (Settings)
3. Dán **Gemini API Key** vào ô "GEMINI API KEY"
4. API Key sẽ được lưu tự động

> **Lưu ý**: API Key được lưu trữ an toàn trong Chrome Storage, chỉ bạn mới truy cập được.

---

## 📖 Hướng Dẫn Sử Dụng Chi Tiết

### **1. Sáng Tác Nhạc Cơ Bản**

#### **Bước 1: Mở Extension**
- Click vào icon **VSunoMaker.AI** trên thanh công cụ
- Hoặc truy cập Suno.com và extension sẽ tự động kích hoạt

#### **Bước 2: Nhập Ý Tưởng**
```
Ví dụ Concept:
"Một bài ballad V-pop tâm trạng về sự nuối tiếc trong những đêm mưa, 
giai điệu buồn nhẹ nhàng, lời ca sâu lắng"
```

#### **Bước 3: Tùy Chỉnh**
- **Vibe**: Chọn "Indie Chill" hoặc "V-Pop Viral"
- **Artist**: Nhập "Sơn Tùng M-TP" (nếu muốn phong cách tương tự)
- **Gender**: Chọn "Nam (Male)"
- **Region**: Chọn "Miền Nam"

#### **Bước 4: Tạo Hit**
- Click nút **"TẠO HIT NGAY"**
- Đợi 3-5 giây để AI xử lý
- Nội dung sẽ tự động điền vào Suno.com

### **2. Sử Dụng Chế Độ Lyrics Mode**

1. Bật toggle **"Lời Bài Hát"** (bên cạnh "Ý Tưởng")
2. Nhập lời bài hát có sẵn vào ô text
3. AI sẽ:
   - Tối ưu lời theo cấu trúc chuẩn
   - Tự động tạo Style phù hợp
   - Thêm Magic Polish (vần điệu, nhịp điệu)

### **3. Studio Mode - Inspector Tool**

**Khi nào cần dùng?**
- Suno.com cập nhật giao diện mới
- Extension không tự động điền đúng ô
- Muốn tùy chỉnh vị trí điền chính xác

**Cách sử dụng:**

1. Click nút **"✎ L"** (Inspector Lyrics) hoặc **"✎ S"** (Inspector Style)
2. Con trỏ chuột sẽ chuyển sang chế độ chọn phần tử
3. Di chuột đến ô nhập liệu trên Suno.com
4. Click chuột trái để "khóa" mục tiêu
5. Extension sẽ ghi nhớ vị trí này cho các lần sau

**Visual Feedback:**
- Ô được chọn sẽ có viền highlight màu xanh neon
- Nút **"↻ Regenerate"** xuất hiện ở góc trên bên phải

### **4. Quick Regenerate**

**Tính năng:**
- Tái tạo nội dung ngay lập tức mà không cần mở Popup
- Chỉ thay đổi phần được chọn (Lyrics hoặc Style)

**Cách dùng:**
1. Sau khi đã điền nội dung (tự động hoặc qua Inspector)
2. Click nút **"↻"** trên viền highlight của ô
3. AI sẽ tạo phiên bản mới và tự động thay thế

### **5. Studio Advanced - Tính Năng Nâng Cao**

#### **Custom AI Persona**
```
Ví dụ:
"Bạn là Hit-Maker chuyên dòng nhạc Vinahouse, 
có kinh nghiệm 10 năm, phong cách sáng tác năng động, 
trẻ trung, giai điệu bắt tai"
```

#### **Structure Builder**
1. Click các nút: **Intro** → **Verse** → **Chorus** → **Bridge** → **Outro**
2. Cấu trúc sẽ hiển thị theo thứ tự đã chọn
3. AI sẽ tạo lời theo đúng cấu trúc này

#### **See The Sound**
1. Kéo thả hoặc click để upload ảnh
2. AI phân tích màu sắc, cảm xúc, bố cục
3. Tạo nhạc phù hợp với "vibe" của ảnh

#### **Style Fusion**
```
Style 1: V-Pop
Style 2: Jazz
→ Kết quả: "V-Pop Jazz Fusion with smooth saxophone and modern beat"
```

#### **Clone The Vibe**
1. Dán lời bài hát gốc hoặc mô tả bài hát
2. AI phân tích phong cách, cấu trúc, tone giọng
3. Tạo bài mới với cùng "vibe" nhưng nội dung khác

---

## 🛠️ Thông Tin Kỹ Thuật

### **Công Nghệ Sử Dụng**
- **Manifest Version**: 3 (Chrome Extension MV3)
- **AI Engine**: Google Gemini API (gemini-pro)
- **Languages**: JavaScript (ES6+), HTML5, CSS3
- **Storage**: Chrome Storage API
- **Permissions**: 
  - `activeTab`: Tương tác với tab hiện tại
  - `scripting`: Inject scripts vào Suno.com
  - `storage`: Lưu trữ cấu hình và lịch sử
  - `sidePanel`: Hỗ trợ Side Panel UI
  - `contextMenus`: Menu chuột phải (tính năng tương lai)

### **Cấu Trúc Thư Mục**
```
Suno-Hit-Maker/
├── manifest.json           # Extension configuration
├── README.md              # Documentation
└── src/
    ├── background/        # Service Worker
    │   └── background.js
    ├── content/           # Content Scripts
    │   ├── suno-inject.js
    │   └── suno-styles.css
    ├── popup/             # Extension UI
    │   ├── popup.html
    │   ├── popup.css
    │   └── popup.js
    ├── core/              # Core Logic
    │   ├── ai-engine.js
    │   └── prompt-builder.js
    └── icons/             # Extension Icons
        └── icon.png
```

---

## ❓ Câu Hỏi Thường Gặp (FAQ)

### **1. Extension không tự động điền được vào Suno?**
- Sử dụng **Studio Mode (Inspector)** để chọn lại ô nhập liệu
- Kiểm tra xem bạn đã mở đúng trang Suno.com chưa
- Refresh lại trang Suno và thử lại

### **2. API Key không hoạt động?**
- Kiểm tra API Key có đúng không (không có khoảng trắng thừa)
- Đảm bảo API Key chưa hết hạn hoặc vượt quota
- Thử tạo API Key mới tại [Google AI Studio](https://aistudio.google.com/app/apikey)

### **3. AI tạo nội dung không như mong muốn?**
- Mô tả Concept chi tiết hơn (càng cụ thể càng tốt)
- Sử dụng **Custom AI Persona** để định hướng phong cách
- Thử **Quick Regenerate** để tạo phiên bản khác

### **4. Extension bị lỗi sau khi Suno cập nhật giao diện?**
- Sử dụng **Inspector Tool** để chọn lại vị trí ô mới
- Chờ cập nhật extension từ developer
- Báo lỗi qua GitHub Issues

### **5. Làm sao để tạo nhạc không lời (Instrumental)?**
- Tick vào checkbox **"Instrumental"** trước khi click "TẠO HIT NGAY"
- AI sẽ tự động tạo Style phù hợp cho nhạc không lời

---

## 🔒 Bảo Mật & Quyền Riêng Tư

- **API Key**: Được mã hóa và lưu trữ cục bộ trong Chrome Storage, không gửi đến server nào khác ngoài Google AI
- **Dữ Liệu Người Dùng**: Extension không thu thập, lưu trữ hoặc chia sẻ dữ liệu cá nhân
- **Quyền Truy Cập**: Chỉ hoạt động trên domain `suno.com`, không can thiệp vào các trang web khác
- **Open Source**: Mã nguồn công khai, có thể kiểm tra và đóng góp tại GitHub

---

## 🐛 Báo Lỗi & Đóng Góp

### **Báo Lỗi (Bug Report)**
Nếu gặp lỗi, vui lòng tạo Issue tại: [GitHub Issues](https://github.com/hainguyen011/Suno-Hit-Maker/issues)

**Thông tin cần cung cấp:**
- Mô tả lỗi chi tiết
- Các bước để tái hiện lỗi
- Screenshot (nếu có)
- Phiên bản Chrome và Extension

### **Đóng Góp (Contribution)**
Mọi đóng góp đều được hoan nghênh! 
1. Fork repository
2. Tạo branch mới: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Tạo Pull Request

---

## 📝 Changelog

### **Version 1.2 - Pro** (Current)
- ✅ Thêm Voice Customization (Gender & Region)
- ✅ Quick Regenerate Button
- ✅ Studio Advanced Features
- ✅ Magic Polish cho Lyrics
- ✅ Instrumental Mode
- ✅ History Management

### **Version 1.0** (Initial Release)
- ✅ AI-Powered Lyrics & Style Generation
- ✅ Studio Mode (Inspector)
- ✅ Auto-Fill Integration
- ✅ Vibe Selector
- ✅ Custom Vibe Input

---

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

## 👨‍💻 Tác Giả

**Developed by Anton**

- GitHub: [@hainguyen011](https://github.com/hainguyen011)
- Project Link: [Suno-Hit-Maker](https://github.com/hainguyen011/Suno-Hit-Maker)

---

## 🙏 Lời Cảm Ơn

- **Google Gemini AI**: Cung cấp AI Engine mạnh mẽ
- **Suno.com**: Nền tảng sáng tạo âm nhạc tuyệt vời
- **Cộng Đồng Open Source**: Đóng góp ý tưởng và feedback

---

<div align="center">

**⭐ Nếu thấy hữu ích, hãy cho project một Star trên GitHub! ⭐**

Made with ❤️ and 🎵 by Anton

</div>
