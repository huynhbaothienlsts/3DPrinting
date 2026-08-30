const q=(question,options,answer,explain)=>({question,options,answer,explain});
window.quizData={
1:[
q('Thuật ngữ nào mô tả chính xác nguyên lý của in 3D?',['Sản xuất bồi đắp','Đúc ép phun','Sản xuất cắt gọt','Dập nguội'],0,'In 3D thêm vật liệu theo từng lớp nên thuộc sản xuất bồi đắp.'),
q('In 3D khác phay CNC ở điểm cốt lõi nào?',['In 3D dùng khuôn','In 3D tạo nhiều phoi hơn','In 3D đắp lớp, CNC loại bỏ vật liệu','Cả hai đều gọt phôi'],2,'Một phương pháp thêm vật liệu, phương pháp kia lấy vật liệu đi.'),
q('Bước nào chia mô hình thành các lớp và tính đường đi đầu phun?',['Slicing','Nạp filament','Hậu kỳ','CAD'],0,'Slicer tạo lớp và đường chạy G-code.'),
q('Hạn chế đúng của in 3D là gì?',['Không dùng được trong y tế','Không tạo được khối rỗng','Luôn tạo nhiều phế liệu','Không tối ưu cho hàng triệu sản phẩm'],3,'Sản xuất hàng loạt rất lớn thường phù hợp hơn với công nghệ khác.'),
q('Ứng dụng nổi bật trong kiến trúc?',['In bản vẽ giấy','Sản xuất xi măng','Tạo sa bàn và mô hình thu nhỏ','Làm trần thạch cao'],2,'In 3D giúp chế tạo nhanh mô hình công trình.')],
2:[
q('Trong hệ trục 3D, trục Z thường biểu diễn gì?',['Chiều ngang','Chiều sâu','Chiều cao'],2,'Z thường là phương thẳng đứng.'),
q('Đơn vị tiêu chuẩn phổ biến trong thiết kế in 3D?',['Mét','Milimét','Centimét'],1,'Milimét hỗ trợ độ chính xác kỹ thuật.'),
q('Torus giống vật thể nào nhất?',['Kim tự tháp','Bánh donut','Lon nước'],1,'Torus là khối dạng vòng.'),
q('Góc nhìn nào tạo cảm giác chiều sâu giống mắt người?',['Front','Top','Perspective'],2,'Perspective là góc phối cảnh.'),
q('Ngôi nhà đơn giản có thể phân rã thành?',['Box + Wedge','Sphere + Cylinder','Cone + Torus'],0,'Box làm thân và Wedge làm mái là lựa chọn hợp lý.')],
3:[
q('Lưới xanh dùng đặt mô hình trong Tinkercad gọi là gì?',['ViewCube','Workplane','Shapes panel','Group'],1,'Workplane là mặt phẳng làm việc.'),
q('Đưa một khối vào vùng thiết kế bằng cách nào?',['Nhấp đúp Workplane','Gõ tên khối','Kéo từ Shapes panel vào Workplane'],2,'Tinkercad dùng thao tác kéo thả shape.'),
q('ViewCube dùng để làm gì?',['Đổi tên file','Chứa shape','Đổi nhanh góc nhìn'],2,'ViewCube điều hướng Top, Front, Side…'),
q('Lỡ xóa một khối, dùng công cụ nào để lấy lại?',['Undo/Ctrl+Z','Redo/Ctrl+Y','Delete'],0,'Undo hoàn tác hành động vừa thực hiện.'),
q('Giữ chuột phải và rê chuột dùng để?',['Xoay camera','Zoom','Xóa vật thể'],0,'Chuột phải điều khiển góc nhìn.')],
4:[
q('Scale mà không làm biến dạng tỉ lệ cần giữ phím nào?',['Ctrl','Alt','Shift','Tab'],2,'Shift giữ tỉ lệ các chiều khi kéo tay nắm góc.'),
q('Tay nắm nào nâng vật thể khỏi Workplane?',['Ô trắng góc','Nón đen phía trên','Ô đen cạnh','Vòng cung'],1,'Nón đen điều khiển độ cao Z.'),
q('Ctrl+D khác Copy/Paste ở điểm nào?',['Chỉ nhân bản một khối','Chính xác hơn','Ghi nhớ và lặp biến đổi','Không khác'],2,'Smart Duplicate lặp chuỗi dịch chuyển/xoay/scale.'),
q('Muốn xoay tinh hơn thay vì nhảy góc lớn, đặt chuột ở đâu?',['Giữ Alt','Phía ngoài vòng chia độ','Tâm vật thể','Phía trong vòng'],1,'Vùng ngoài vòng xoay cho bước góc nhỏ hơn.'),
q('Khối cao 10 mm được nâng đáy lên 5 mm; đỉnh cao bao nhiêu?',['5 mm','10 mm','15 mm','20 mm'],2,'Độ cao đỉnh = độ nâng đáy + chiều cao khối.')],
5:[
q('Muốn khoét lỗ trụ qua khối hộp, hình trụ phải là?',['Solid','Lock','Hole','Transparent'],2,'Hole loại phần giao với Solid khi Group.'),
q('Phím tắt Ungroup là gì?',['Ctrl+G','Ctrl+Shift+G','Ctrl+Z','Ctrl+D'],1,'Ctrl+Shift+G rã nhóm.'),
q('Group Solid với Hole đặt xa nhau sẽ thế nào?',['Báo lỗi','Solid không thay đổi','Solid bị xóa','Hai khối tự hút nhau'],1,'Không có phần giao nên không có vật liệu bị lấy đi.'),
q('Phím tắt Align là gì?',['A','L','M','D'],1,'L mở công cụ căn chỉnh.'),
q('Tạo chữ nổi trên móc khóa bằng cách nào?',['Text Hole chìm vào đế','Text Solid nhô trên đế rồi Group','Text Hole lơ lửng','Đặt xa rồi Align'],1,'Chữ nổi phải là Solid giao với phần đế.')],
6:[
q('Phím đặt Workplane phụ lên bề mặt vật thể?',['R','W','M','S'],1,'W kích hoạt Workplane.'),
q('Smart Duplicate có khả năng nào?',['Giảm dung lượng','Lặp phép biến đổi trước','Chỉ dùng cho Hole','Đổi màu vật thể'],1,'Ctrl+D có thể ghi nhớ dịch chuyển và xoay.'),
q('Tạo hai bàn tay robot đối xứng dùng công cụ nào?',['Rotate','Align','Mirror','Scale'],2,'Mirror lật đối tượng qua trục.'),
q('Trở về Workplane gốc bằng cách nào?',['Esc','W rồi click vùng trống','Ctrl+Z','Xóa mô hình'],1,'Đặt lại Workplane trên mặt phẳng gốc.'),
q('Ruler cung cấp thông tin đặc biệt nào?',['Trọng lượng','Khổ bàn in','Tọa độ từ gốc thước','Thời gian in'],2,'Ruler hiển thị vị trí tuyệt đối và kích thước.')],
7:[
q('Quy tắc 45° liên quan đến khái niệm nào?',['Độ bền nhựa','Overhang có thể cần support','Nhiệt nozzle','Tốc độ bàn'],1,'Góc overhang ảnh hưởng khả năng tự đỡ của lớp in.'),
q('Nắp hộp cần lắp vừa nên thiết kế lòng nắp thế nào?',['Đúng bằng miệng hộp','Nhỏ hơn','Lớn hơn một chút để có dung sai','Bất kỳ'],2,'Chi tiết lắp ghép cần khoảng hở thử nghiệm.'),
q('Watertight nghĩa là gì?',['Chống nước tuyệt đối','Bề mặt khép kín, không lỗ hở','Rỗng để chứa nước','Thiết kế bằng Tinkercad'],1,'Watertight mô tả hình học kín/manifold.'),
q('Cách thường giúp giảm support cho chữ T?',['Đổi hướng đặt phù hợp','Tăng chiều cao','Đổi màu','Giảm nhiệt bàn'],0,'Orientation có thể giảm overhang.'),
q('Chi tiết mỏng nhất phụ thuộc chủ yếu vào?',['Chiều cao vật','Nozzle, máy và vật liệu','Dung lượng STL','Màu filament'],1,'Giới hạn hình học phụ thuộc hệ thống in cụ thể.')],
8:[
q('Bộ phận nung nóng chảy filament?',['Build Plate','Hotend','Extruder motor','Cooling Fan'],1,'Hotend tạo nhiệt để làm chảy nhựa.'),
q('Đường kính nozzle phổ biến trên máy FDM học đường?',['0,1 mm','0,4 mm','1,75 mm','4 mm'],1,'0,4 mm là kích thước nozzle phổ biến; 1,75 mm thường là đường kính filament.'),
q('Cooling Fan làm gì?',['Mát động cơ','Làm nguội nhựa vừa phun','Giảm nhiệt bàn','Thổi bụi'],1,'Quạt giúp lớp mới giữ hình dạng.'),
q('Trục nào nâng cao để in lớp kế tiếp?',['X','Y','Z','E'],2,'Z điều khiển chiều cao lớp.'),
q('Filament là gì?',['G-code','Sợi vật liệu dạng cuộn','Bàn in','Support'],1,'Filament là nguyên liệu đầu vào của máy FDM.')],
9:[
q('Tệp nào thường xuất từ Tinkercad sang Slicer?',['G-code','STL','PDF','DOC'],1,'STL chứa hình học bề mặt.'),
q('Máy in thực sự đọc tệp nào?',['STL','OBJ','G-code','PNG'],2,'G-code chứa lệnh vận hành máy.'),
q('Vai trò của Slicer?',['Vẽ mô hình từ đầu','Chia lớp và tính đường chạy','Quét mã','Sửa phần cứng'],1,'Slicer biên dịch hình học thành lệnh in.'),
q('Thứ tự đúng là?',['Tinkercad → STL → Slicer/G-code → Máy in','G-code → Tinkercad → Slicer','Slicer → STL → Tinkercad','Tinkercad → in trực tiếp'],0,'Mô hình phải qua bước slicing.'),
q('CHECK trước khi xuất gồm?',['Đổi màu xanh','Kiểm tra kích thước, Group và chi tiết lơ lửng','Tắt máy','Nạp filament'],1,'Kiểm tra hình học giúp tránh lãng phí bản in.')],
10:[
q('Thông số nào giúp bề mặt mịn hơn?',['Tăng infill','Giảm Layer Height','Tăng tốc','Bật Brim'],1,'Lớp mỏng hơn thường giảm gờ lớp nhưng tăng thời gian.'),
q('Infill 100% có luôn tối ưu không?',['Có, luôn đẹp','Không, tốn vật liệu/thời gian và có thể tăng co ngót','Có, khỏi cần support','Không, vì hỏng nozzle'],1,'Mật độ ruột phải phù hợp mục tiêu sử dụng.'),
q('Brim dùng để làm gì?',['Đỡ overhang','Tăng diện tích bám quanh chân mẫu','Làm rỗng mô hình','Tăng nhiệt hotend'],1,'Brim nối với chân mẫu để giảm bong góc.')],
11:[
q('Khi mẫu đang warping, hành động an toàn đầu tiên?',['Dùng tay ấn xuống','Báo giáo viên hoặc dừng an toàn','Phun nước','Tăng tốc 200%'],1,'Không đưa tay vào vùng máy đang chạy/nóng.'),
q('Các sợi nhựa mảnh giăng giữa hai chi tiết gọi là?',['Warping','Stringing','Layer Shift','Over-extrusion'],1,'Stringing thường liên quan nhiệt độ và retraction.'),
q('Vì sao không chạm nozzle ngay sau khi in xong?',['Có điện giật','Nozzle vẫn rất nóng, có thể gây bỏng','Làm bẩn nozzle','Làm lệch bàn'],1,'Kim loại giữ nhiệt lâu sau khi bản in hoàn thành.')],
12:[
q('Bước đầu của quy trình thiết kế kỹ thuật?',['Mở Tinkercad vẽ ngay','ASK để xác định vấn đề/người dùng','Mua filament','Xuất G-code'],1,'Thiết kế tốt bắt đầu từ nhu cầu thật.'),
q('Vì sao nên phác thảo kèm kích thước trước khi dựng 3D?',['Để chấm vẽ đẹp','Làm rõ ý tưởng và thao tác chính xác hơn','Máy in quét trực tiếp','Không có tác dụng'],1,'Sketch giúp kiểm tra bố cục và số đo trước khi dựng.'),
q('Ngàm phone stand bị gãy sau test; nên cải tiến thế nào?',['Bỏ dự án','Chỉ dán keo','Tăng độ dày, bo/vát góc rồi thử lại','Đổi sang móc khóa'],2,'Kết quả thử nghiệm phải dẫn đến thay đổi có lý do.')]
};
