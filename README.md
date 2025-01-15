# Dashboard Application

Ứng dụng **Dashboard** giúp quản lý và hiển thị dữ liệu một cách trực quan, bao gồm các tính năng như quản lý người dùng, thống kê, và tìm kiếm dữ liệu. Ứng dụng được phát triển để hỗ trợ cả người dùng và quản trị viên với các chức năng tiện lợi và dễ sử dụng.

---

## 📝 Tính Năng

### Dành Cho Người Dùng
- Xem và chỉnh sửa thông tin cá nhân.
- Nhận thông báo từ quản trị viên.

### Dành Cho Quản Trị Viên
- Thống kê và phân tích dữ liệu người dùng.
- Gửi thông báo đến tất cả người dùng.
- Quản lý dữ liệu người dùng với chức năng tìm kiếm và sắp xếp.

---

## 🚀 Cài Đặt và Chạy Ứng Dụng

### Yêu Cầu Hệ Thống
- **Node.js** (phiên bản 14 hoặc mới hơn).
- **MySQL** để lưu trữ dữ liệu.
- **React.js** cho frontend.
- **Express.js** cho backend.

### Bước Cài Đặt

1. **Clone repository**:
   ```bash
   git clone https://github.com/yourusername/Dashboard.git
   cd Dashboard
   ```

2. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

3. **Cấu hình cơ sở dữ liệu**:
   - Tạo cơ sở dữ liệu MySQL:
     ```sql
     CREATE DATABASE DashboardDB;
     ```
   - Import file SQL có trong thư mục `database/`:
     ```bash
     mysql -u root -p DashboardDB < database/DashboardDB.sql
     ```
   - Mở file `config/db.config.js` và cập nhật thông tin kết nối:
     ```javascript
     module.exports = {
       HOST: "localhost",
       USER: "root",
       PASSWORD: "yourpassword",
       DB: "DashboardDB",
     };
     ```

4. **Chạy server backend**:
   ```bash
   npm run server
   ```

5. **Chạy client frontend**:
   ```bash
   npm run client
   ```

6. **Truy cập ứng dụng**:
   - Mở trình duyệt và truy cập: `http://localhost:3000`.

---

## 🌟 Hướng Dẫn Sử Dụng

1. **Đăng nhập**:
   - Người dùng và quản trị viên có thể đăng nhập bằng email và mật khẩu.

2. **Quản lý người dùng (Admin)**:
   - Truy cập tab "Quản lý người dùng" để xem danh sách, chỉnh sửa hoặc xóa người dùng.

3. **Thống kê**:
   - Xem biểu đồ thống kê dữ liệu người dùng theo thời gian, bao gồm số lượng người dùng mới và hoạt động hàng ngày.

4. **Gửi thông báo (Admin)**:
   - Nhập nội dung thông báo và gửi đến tất cả người dùng trong ứng dụng.

---

## 🛠 Công Nghệ Sử Dụng

- **Frontend**: React.js, Redux Toolkit (quản lý trạng thái).
- **Backend**: Node.js, Express.js (API RESTful).
- **Cơ sở dữ liệu**: MySQL.
- **Thống kê**: Chart.js (biểu đồ dữ liệu).
- **Authentication**: JWT (JSON Web Tokens).

---

## 🛡️ Bảo Mật

- Sử dụng **JWT** để xác thực và phân quyền API.
- Chỉ quản trị viên mới được phép truy cập các tính năng quản lý.

---


## 📞 Liên Hệ

Nếu có thắc mắc hoặc góp ý, vui lòng liên hệ qua email: **phihung1701@gmail.com**
