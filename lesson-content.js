window.lessonContent={
1:{intro:'In 3D biến một mô hình kỹ thuật số thành vật thể thật bằng cách bồi đắp vật liệu theo từng lớp mỏng.',sections:[
['In 3D và sản xuất bồi đắp','In 3D (3D Printing) là quá trình chế tạo vật thể ba chiều từ tệp thiết kế số. Tên chuyên môn “Additive Manufacturing” nhấn mạnh việc thêm vật liệu đúng nơi cần thiết, trái với cắt bỏ vật liệu từ một phôi lớn.'],
['Vật thể hình thành theo lớp','Hãy hình dung một cuốn sách được tạo từ nhiều trang giấy. Đầu phun nung chảy vật liệu, vẽ lớp đầu tiên, nâng lên một khoảng rất nhỏ rồi tiếp tục lớp kế tiếp cho đến khi hoàn thiện.'],
['Ứng dụng',['Giáo dục: mô hình trực quan cho khoa học và kỹ thuật.','Y tế: mô hình giải phẫu, răng và chi giả.','Kiến trúc: sa bàn và mô hình công trình.','Kỹ thuật, robotics: mẫu thử và chi tiết tùy biến.','Đời sống: móc khóa, chậu cây, đồ chơi và dụng cụ.']],
['Ưu điểm và giới hạn',['Ưu điểm: ít phế liệu, tự do hình học, tạo mẫu nhanh và cá nhân hóa.','Giới hạn: thời gian in dài, vật liệu có giới hạn cơ học/nhiệt và bề mặt thường còn đường lớp.','In 3D không mặc nhiên rẻ hơn khi sản xuất hàng triệu sản phẩm.']],
['Quy trình 4 bước',['Thiết kế CAD và xuất STL/OBJ.','Slicing để tạo đường chạy và G-code.','Máy in gia nhiệt, chuyển động và bồi đắp vật liệu.','Hậu kỳ: tháo support, làm sạch, chà nhám hoặc sơn.']]],visual:'manufacturing'},
2:{intro:'Không gian 3D có chiều rộng, chiều sâu và chiều cao; mọi biến đổi đều được mô tả bằng tọa độ và đơn vị chính xác.',sections:[
['Hệ trục và đơn vị',['X (đỏ): chiều rộng trái/phải.','Y (xanh lá): chiều sâu tiến/lùi.','Z (xanh dương): chiều cao lên/xuống.','Milimét (mm) là đơn vị phổ biến trong thiết kế và in 3D.']],
['Bốn thuộc tính cần phân biệt',['Position: vật thể nằm ở tọa độ nào.','Size/Scale: kích thước thực hoặc tỉ lệ phóng to, thu nhỏ.','Rotation: góc xoay quanh các trục.','Viewport: Front, Top, Side và Perspective chỉ đổi cách quan sát, không đổi vật thể.']],
['Phân rã vật thể','Đồ vật phức tạp thường là tổ hợp của Box, Cylinder, Sphere, Cone, Wedge và Torus. Ví dụ: ngôi nhà đơn giản = Box làm thân + Wedge làm mái.']],visual:'axes'},
3:{intro:'Tinkercad là công cụ thiết kế 3D trực tuyến miễn phí, phù hợp để bắt đầu vì hoạt động ngay trong trình duyệt.',sections:[
['Bắt đầu và quản lý thiết kế',['Tham gia lớp bằng liên kết Classroom do giáo viên cung cấp.','Tạo thiết kế mới bằng Create → 3D Design.','Đổi tên ngẫu nhiên thành tên bài rõ ràng để dễ tìm và nộp.']],
['Ba khu vực chính',['Workplane: mặt bàn đặt và dựng mô hình.','ViewCube: chuyển nhanh góc Top, Front, Right…','Shapes panel: nơi kéo Box, Cylinder, Sphere và các khối khác.']],
['Thao tác camera và chỉnh sửa',['Kéo thả shape vào Workplane; click vùng trống để bỏ chọn.','Cuộn chuột để zoom; giữ chuột phải để xoay; giữ nút giữa để pan.','Undo (Ctrl+Z), Redo (Ctrl+Y), Delete/Backspace giúp sửa thao tác.']]],visual:'tinkercad'},
4:{intro:'Thiết kế kỹ thuật cần số đo chính xác thay vì ước lượng bằng mắt.',sections:[
['Di chuyển và nâng vật thể',['Kéo vật thể trên Workplane để thay đổi X/Y.','Kéo tay nắm hình nón màu đen để nâng/hạ theo Z.']],
['Thay đổi kích thước',['Ô trắng ở góc đổi đồng thời dài và rộng; ô đen ở cạnh đổi riêng một chiều; ô trắng phía trên đổi chiều cao.','Nhập trực tiếp số đo mm để đạt kích thước chính xác.','Giữ Shift khi kéo góc để scale đồng đều; giữ Alt để scale từ tâm.']],
['Xoay, chọn nhiều và Duplicate',['Vòng cung chia độ xoay vật thể; vùng trong dùng bước góc lớn, vùng ngoài điều chỉnh tinh.','Shift+click hoặc quét vùng để chọn nhiều vật thể.','Ctrl+D tạo bản sao và có thể lặp lại chuỗi di chuyển/xoay/scale.']],
['Nhận diện tay nắm','Nón đen: nâng Z · Ô trắng góc: đổi X/Y · Ô đen cạnh: đổi một chiều · Ô trắng trên: đổi chiều cao · Vòng cung: xoay.']],visual:'handles'},
5:{intro:'Solid tạo vật liệu, Hole lấy vật liệu đi; Group và Align biến các khối đơn giản thành một thiết kế chính xác.',sections:[
['Solid, Hole và Group',['Solid là khối đặc có thể tích và màu sắc.','Hole là vùng cắt trong suốt; chỉ phần giao với Solid bị loại khi Group (Ctrl+G).','Nhiều Solid có thể Group thành một khối thống nhất; Ungroup (Ctrl+Shift+G) tách lại các thành phần.']],
['Chữ nổi và chữ khắc',['Chữ nổi: để Text ở dạng Solid, đặt nhô trên đế rồi Group.','Chữ khắc: đổi Text thành Hole, dìm vào bề mặt rồi Group.']],
['Align chính xác','Chọn ít nhất hai đối tượng, nhấn L, sau đó chọn các điểm căn đầu, giữa hoặc cuối trên từng trục. Căn tâm Hole với đế trước khi Group giúp lỗ nằm đúng vị trí.'],
['Lỗi thường gặp',['Không có lỗ: Hole chưa giao Solid.','Thủng ngoài ý muốn: Hole đi xuyên quá sâu.','Mất chi tiết: một Solid quan trọng bị chuyển nhầm thành Hole.']]],visual:'boolean'},
6:{intro:'Mirror, Workplane phụ, Ruler và Smart Duplicate giúp tạo thiết kế đối xứng, đo chính xác và lặp nhanh.',sections:[
['Mirror (M)','Lật đối tượng qua X, Y hoặc Z. Công cụ phù hợp với cánh máy bay, đôi tai, bàn tay robot và chi tiết trái/phải.'],
['Workplane phụ (W)','Đặt mặt phẳng làm việc lên một mặt nghiêng hoặc đứng để thả khối mới trực tiếp lên bề mặt đó; nhấn W và chọn vùng trống để trở về mặt phẳng gốc.'],
['Ruler (R)','Hiển thị kích thước và tọa độ tuyệt đối từ gốc thước, giúp kiểm soát khoảng cách giữa các cạnh và vật thể.'],
['Smart Duplicate (Ctrl+D)','Tạo bản sao, ghi nhớ phép dịch chuyển/xoay/scale rồi lặp lại. Ứng dụng: hàng rào, cánh quạt, cầu thang xoắn và hoa văn vòng.']],visual:'repeat'},
7:{intro:'Design for 3D Printing giúp mô hình đẹp trên màn hình trở thành sản phẩm thật có thể in được.',sections:[
['Hình học hợp lệ',['Watertight/Manifold: bề mặt khép kín, không có lỗ hoặc mặt không độ dày.','Các chi tiết phải giao nhau thật sự để không tách thành nhiều mảnh.','Đáy đủ rộng và phẳng giúp mẫu bám bàn, tránh xô ngã.']],
['Overhang, Bridge và thành mỏng',['Thành phải phù hợp với đường kính nozzle và khả năng máy.','Overhang lớn thường cần support; đổi hướng đặt hoặc vát góc có thể giảm support.','Bridge ngắn có thể bắc qua khoảng trống, bridge dài cần hỗ trợ.']],
['Dung sai lắp ghép','Các chi tiết lắp vào nhau cần khoảng hở thử nghiệm. Giá trị phù hợp phụ thuộc máy, nozzle, vật liệu và profile; không có một con số đúng cho mọi trường hợp.']],visual:'printability'},
8:{intro:'Máy FDM đưa sợi nhựa qua hệ thống cấp liệu, nung chảy và đặt chính xác từng đường vật liệu lên bàn in.',sections:[
['Các bộ phận chính',['Frame giữ ổn định máy; filament là nguyên liệu dạng sợi.','Extruder dùng bánh răng đẩy filament.','Hotend nung nhựa; nozzle tạo đường nhựa mảnh.','Build Plate đỡ lớp đầu; động cơ bước điều khiển X/Y/Z.','Cooling Fan làm nguội lớp vừa in để giữ hình dạng.']],
['Chuỗi dòng vật liệu','Filament → Extruder → Hotend → Nozzle → lớp nhựa trên Build Plate. Trục Z tăng dần sau mỗi lớp.'],
['Thông số tham khảo','Nozzle 0,4 mm là kích thước phổ biến trên nhiều máy FDM học đường; hotend khi in PLA thường ở khoảng 190–220°C. Luôn dùng thông số do giáo viên/profile máy cung cấp.']],visual:'printer'},
9:{intro:'STL mô tả hình học; Slicer mới biến hình học đó thành lệnh G-code mà máy in hiểu được.',sections:[
['Chuỗi sản xuất','ASK → SKETCH → MAKE → CHECK → EXPORT → SLICE → PREVIEW → PRINT → TEST → IMPROVE.'],
['STL/OBJ và G-code',['STL/OBJ chứa lưới bề mặt hình học, được xuất từ Tinkercad và nhập vào Slicer.','G-code chứa tọa độ, nhiệt độ, tốc độ và lượng đùn; được Slicer tạo và máy in đọc.']],
['Vì sao không in trực tiếp STL?','STL không có đường đi nozzle, nhiệt độ, tốc độ, quạt hay thứ tự lớp. Slicer tính toán các thông tin đó và cho phép preview trước khi in.'],
['CHECK trước khi xuất',['Kiểm tra kích thước tổng thể.','Xác nhận Group kín, không có chi tiết lơ lửng.','Đặt tên file đúng quy tắc và chọn đúng đơn vị.']]],visual:'pipeline'},
10:{intro:'Slicing là bài toán cân bằng giữa độ mịn, độ bền, thời gian, vật liệu và khả năng in.',sections:[
['Thông số cốt lõi',['Layer Height: thấp hơn thường mịn hơn nhưng lâu hơn.','Wall/Perimeter: tăng vách giúp vỏ cứng hơn.','Infill: cấu trúc ruột; tăng mật độ thường tăng bền, thời gian và vật liệu.','Support: đỡ vùng overhang nhưng tốn vật liệu và để lại dấu.']],
['Bám bàn',['Skirt mồi dòng nhựa nhưng không chạm mẫu.','Brim nối với chân mẫu để tăng diện tích bám.','Raft là nền nhiều lớp đặt dưới toàn bộ mẫu.']],
['Luôn Preview','Không có profile tốt nhất cho mọi mô hình. Hãy xem đường chạy, thời gian, lượng vật liệu và support trước khi quyết định.']],visual:'slicer'},
11:{intro:'An toàn luôn đứng trước việc cứu một bản in. Khi máy bất thường, dừng an toàn, quan sát và báo giáo viên.',sections:[
['Quy tắc phòng in',['Không chạm nozzle/hotend và bàn in khi chưa nguội.','Không đưa tay, tóc hoặc dây thẻ vào bộ phận chuyển động.','Dùng dụng cụ tháo mẫu hướng ra xa cơ thể.','Vận hành ở nơi thông thoáng và chỉ khi giáo viên cho phép.']],
['3D Print Doctor',['Warping: góc đáy bong; kiểm tra bám bàn, vệ sinh, Brim và nhiệt.','Stringing: tơ nhựa; kiểm tra nhiệt độ và retraction.','Under-extrusion: thiếu nhựa; kiểm tra filament, extruder và nozzle.','Layer Shift: lớp xô ngang; kiểm tra vật cản và cơ khí dưới giám sát.']],
['Chu trình chẩn đoán','Dừng an toàn → quan sát → mô tả triệu chứng → nêu nguyên nhân khả dĩ → thử một thay đổi → ghi kết quả.']],visual:'defects'},
12:{intro:'Dự án cuối khóa bắt đầu từ một nhu cầu thật, được kiểm chứng bằng tiêu chí đo được và nhiều vòng cải tiến.',sections:[
['Quy trình tư duy thiết kế','ASK → IMAGINE → PLAN/SKETCH → CREATE → TEST → IMPROVE. Không bắt đầu bằng một hình dạng ngẫu nhiên; hãy bắt đầu từ người dùng và vấn đề.'],
['Problem và Solution','Ví dụ vấn đề: bút và thước thường lăn khỏi bàn. Giải pháp có thể là khay đựng tùy biến gắn mép bàn.'],
['Design Brief',['Đối tượng sử dụng là ai?','Sản phẩm phải làm được gì và đo bằng cách nào?','Kích thước có vừa bàn in? Thời gian in có phù hợp?','Vật liệu, độ bền, support và các giới hạn khác là gì?']],
['Thử thách Phone Stand','Thiết kế giá đỡ điện thoại để bàn: đáy đủ rộng, rãnh đặt điện thoại có dung sai, góc nhìn phù hợp, ít support và thời gian in trong giới hạn lớp học.'],
['Cải tiến sau thử nghiệm','Nếu ngàm gãy, quay lại mô hình: tăng độ dày, bo/vát góc để giảm tập trung ứng suất, in mẫu mới và so sánh với tiêu chí.']],visual:'design'}
};
window.lessonVisual=function(type){
 const visuals={
 manufacturing:`<div class="edu-compare"><div><b>➕ Bồi đắp</b><span class="layer-stack">▰<br>▰<br>▰</span><small>Thêm vật liệu theo lớp</small></div><div><b>✂ Cắt gọt</b><span class="cut-block">◆ → ◇</span><small>Loại vật liệu khỏi phôi</small></div><div><b>⬡ Đúc</b><span>♨ → ◉</span><small>Rót vật liệu vào khuôn</small></div></div>`,
 axes:`<div class="edu-axes"><div class="axis x">X</div><div class="axis y">Y</div><div class="axis z">Z</div><div class="axis-object">3D</div></div>`,
 tinkercad:`<div class="edu-ui"><div class="ui-tools">↶ &nbsp; ↷ &nbsp; 🗑</div><div class="ui-cube">TOP<br>FRONT</div><div class="ui-plane">WORKPLANE</div><div class="ui-shapes"><b>SHAPES</b><i>■</i><i>●</i><i>▲</i></div></div>`,
 handles:`<div class="edu-handles"><div class="handle-model">BOX<i class="h top">▲ Z</i><i class="h corner">□ X/Y</i><i class="h side">■ X</i><i class="h rotate">↻</i></div></div>`,
 boolean:`<div class="edu-boolean"><div class="solid-demo">SOLID</div><b>+</b><div class="hole-demo">HOLE</div><b>GROUP →</b><div class="result-demo">LỖ</div></div>`,
 repeat:`<div class="edu-repeat"><span>◆</span><span>◆</span><span>◆</span><span>◆</span><span>◆</span><b>Ctrl+D</b></div>`,
 printability:`<div class="edu-printability"><div class="print-model">MODEL</div><i>① Đáy</i><i>② Thành</i><i>③ Overhang</i><i>④ Liên kết</i></div>`,
 printer:`<figure class="lesson-figure"><img src="assets/images/fdm-printer-lesson.png" alt="Minh họa máy in 3D FDM đang tạo vật thể theo từng lớp" width="1536" height="1024" loading="lazy"><figcaption>Máy in FDM: filament được cấp tới đầu in, nung chảy và đặt thành từng lớp trên bàn in.</figcaption></figure>`,
 pipeline:`<div class="edu-pipeline">${['Tinkercad','STL','Slicer','G-code','Máy in','Sản phẩm'].map(x=>`<span>${x}</span>`).join('<b>→</b>')}</div>`,
 slicer:`<div class="edu-slicer"><div class="slice-preview">${'<i></i>'.repeat(12)}</div><div><b>Layer</b><meter value="35" max="100"></meter><b>Infill</b><meter value="55" max="100"></meter><b>Support</b><meter value="25" max="100"></meter></div></div>`,
 defects:`<div class="edu-defects"><span class="warp">Warping</span><span class="string">Stringing</span><span class="under">Under-extrusion</span><span class="shift">Layer Shift</span></div>`,
 design:`<div class="edu-cycle">${['ASK','IMAGINE','PLAN','CREATE','TEST','IMPROVE'].map(x=>`<span>${x}</span>`).join('<b>→</b>')}</div>`
 };return visuals[type]||''
};
window.renderLessonContent=function(n){let c=window.lessonContent[n];if(!c)return'';return `<p class="eyebrow">01 · KHÁM PHÁ</p><h2>Kiến thức cốt lõi</h2><p class="lesson-intro">${c.intro}</p>${window.lessonVisual(c.visual)}<div class="knowledge-sections">${c.sections.map(([title,body])=>`<section class="knowledge-item"><h3>${title}</h3>${Array.isArray(body)?`<ul>${body.map(x=>`<li>${x}</li>`).join('')}</ul>`:`<p>${body}</p>`}</section>`).join('')}</div><div class="notice"><b>Ghi nhớ:</b> Hãy liên hệ kiến thức với mô hình và thao tác thực tế trong phần mô phỏng ngay bên dưới.</div>`};
