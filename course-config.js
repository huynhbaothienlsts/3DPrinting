window.courseConfig = {
  courseName: "Thiết kế và In 3D",
  teacherName: "Huỳnh Bảo Thiên",
  passingScore: 80,
  sequentialUnlock: true,
  saveStudentIdentity: false,
  certificateTemplate: "assets/certificates/3D-Certificate.png",
  classes: [],
  lessons: [
    [1,"Khám phá thế giới in 3D","Từ ý tưởng đến vật thể bằng từng lớp vật liệu"],
    [2,"Không gian và hình khối 3D","X, Y, Z và tư duy phân rã vật thể"],
    [3,"Làm quen với Tinkercad","Workplane, ViewCube và Shapes"],
    [4,"Di chuyển, xoay và thay đổi kích thước","Điều khiển mô hình chính xác"],
    [5,"Solid, Hole, Group và Align","Ghép, khoét và căn chỉnh"],
    [6,"Mirror, Workplane, Ruler và Duplicate","Đối xứng, đo và tạo cấu trúc lặp"],
    [7,"Thiết kế để có thể in được","Kiểm tra khả năng in trước khi xuất"],
    [8,"Máy in 3D FDM hoạt động thế nào?","Từ filament đến từng lớp vật liệu"],
    [9,"Từ Tinkercad đến máy in 3D","Export, slice, preview và print"],
    [10,"Các thông số slicing cơ bản","Layer, wall, infill và support"],
    [11,"An toàn và lỗi in thường gặp","Quan sát, chẩn đoán và xử lý an toàn"],
    [12,"Dự án thiết kế giải quyết vấn đề","Ask, imagine, make, test, improve"]
  ].map(([number,title,summary]) => ({
    id:`lesson-${String(number).padStart(2,"0")}`, number, title, summary, enabled:true,
    requiredInteractions:["explore","activity"], theoryAssignmentUrl:"", practiceAssignmentUrl:""
  }))
};
