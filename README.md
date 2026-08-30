# 3D Maker Journey

Website tự học tiếng Việt cho môn tự chọn **Thiết kế và In 3D**. Toàn bộ dữ liệu tiến độ được lưu cục bộ trong trình duyệt; không có backend, tài khoản hoặc analytics.

## Chạy trên máy

Không mở trực tiếp bằng `file://` vì trình duyệt có thể chặn việc xuất chứng nhận. Chạy một web server tĩnh trong thư mục dự án, ví dụ extension Live Server hoặc `python -m http.server 8080`, rồi mở `http://localhost:8080`.

## Deploy GitHub Pages

1. Đẩy toàn bộ thư mục lên nhánh `main` của repository.
2. Vào **Settings → Pages**.
3. Chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`.
4. Lưu và đợi đường dẫn Pages xuất hiện. Mọi đường dẫn trong website đều là tương đối nên hoạt động trong project site.

## Cấu hình khóa học

Sửa `course-config.js` để thay danh sách `teachers`, `passingScore`, `sequentialUnlock`, danh sách lớp và trạng thái bài học. Hai URL Canvas độc lập nằm ở `theoryAssignmentUrl` và `practiceAssignmentUrl`; khi để trống, nút tương ứng sẽ không hiển thị.

Để giáo viên kiểm tra nhanh chứng nhận mà không cần hoàn thành hoạt động, thêm `?action=certificate` vào trang bài, ví dụ `lesson-05.html?action=certificate`. Chế độ này tự điền tên `Huỳnh Bảo Thiên`, lớp `6A1`, chọn giáo viên đầu tiên và mở ngay bản xem trước.

Muốn thêm bài, thêm một mục trong `course-config.js`, nội dung tương ứng trong `lesson-data.js`, và bộ câu hỏi trong `quiz-data.js`. Logic trang bài học tự đọc dữ liệu này.

## Nội dung và quiz

- `lesson-data.js`: tình huống, thuật ngữ, khái niệm, tương tác, thực hành và minh chứng.
- `quiz-data.js`: câu hỏi, lựa chọn, chỉ số đáp án đúng (bắt đầu từ 0), giải thích.
- `course-config.js`: điểm đạt mặc định 80%. Quiz ghi lại điểm cao nhất.

## Chứng nhận

Thay ảnh `assets/certificates/3D-Certificate.png` bằng mẫu A4 ngang cùng tỷ lệ. Nếu vị trí dòng thay đổi, chỉnh các lớp `.cert-lesson`, `.cert-name`, `.cert-class`, `.cert-date`, `.cert-teacher` trong `styles.css`. Website đợi `document.fonts.ready` trước khi xuất, tạo PNG độ phân giải cao và PDF A4 ngang một trang.

## Dự án thực hành

Sửa `practice` và `deliver` của từng bài trong `lesson-data.js`. Có thể thêm dự án mới theo cùng cấu trúc. Trạng thái thực hành là dữ liệu học sinh tự đánh dấu, không phải xác nhận từ Canvas.

## Máy tính dùng chung và reset

Nút **Kết thúc phiên học** cho phép giữ tiến độ, xóa danh tính, hoặc xóa toàn bộ dữ liệu. Trình duyệt luôn yêu cầu xác nhận trước khi xóa toàn bộ. Khóa localStorage chính là `makerJourney.v1`.

## Khắc phục lỗi

- Nếu PDF/PNG không xuất: kiểm tra kết nối tới thư viện `html2canvas` và `jsPDF`, rồi tải lại trang.
- Nếu tiếng Việt lỗi: bảo đảm file được lưu UTF-8 và không thay font chứng nhận bằng font thiếu dấu.
- Nếu Pages báo 404: kiểm tra nguồn Pages là nhánh `main` và root, đồng thời giữ tên file chữ thường như hiện tại.
- Nếu nút Canvas không hiện: điền URL đầy đủ bắt đầu bằng `https://` trong file cấu hình.
