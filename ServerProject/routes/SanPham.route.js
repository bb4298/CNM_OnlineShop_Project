var express = require('express');
var router = express.Router();

//Khai báo conntroller
var SanPhamIndexController = require('../controllers/SanPham_Index.controller');
var SanPhamQLController = require('../controllers/SanPham_QL.controller');
var AuthController = require('../controllers/Auth.controller');

//Route  (Web/api/SanPhams/)

//Lấy tất cả sản phẩm
router.get('/',AuthController.KiemTraTokenAdmin, SanPhamIndexController.LayTatCaSanPham);

//Muốn thêm route cấp 1 thì phải thêm trước route này, không nó sẽ bị lộn tham số
router.get('/:id', SanPhamIndexController.LaySanPhamTheoID_Index);

//Lấy sản phẩm theo tên
router.get('/ten/:ten/:pagenumber/ten', SanPhamIndexController.LaySanPhamTheoTen);

//Lấy sản phẩm theo khoảng giá
router.get('/gia/:tu/:den/:pagenumber', SanPhamIndexController.LaySanPhamTheoKhoangGia);

//Lấy sản phẩm theo số trang
router.get('/:sorttype/:sortkey/:pagenumber', SanPhamIndexController.LaySanPhamTheoSoTrang);




// Route quản lý sản phẩm trang admin

//Lấy tất cả sản phẩm
router.get('/QlSp/AdminAll', SanPhamQLController.LayTatCaSanPham);

//Lấy sản phẩm theo số trang
router.get('/QlSp/Admin/SoTrang/:pagenumber',SanPhamQLController.LaySanPhamTheoSoTrang);

//Lấy sản phẩm theo tên
router.get('/QlSp/Admin/timtheoten/a/b/:tensanpham',SanPhamQLController.LaySanPhamTheoTen);

//Lấy sản phẩm theo id
router.get('/QlSp/Admin/timtheoid/a/b/:id',SanPhamQLController.LaySanPhamTheoID_Admin);

//Tạo sản phẩm
router.post('/QlSp/Admin/:tensanpham', SanPhamQLController.ThemSanPham);

//Sửa sản phẩm ở trang quản lý SP chi tiết
router.put('/QlSp/Admin/:idsanpham', SanPhamQLController.SuaSanPham);


//Kích hoạt chế độ bán sản phẩm ở trang quản lý SP chi tiết
router.put('/QlSp/Admin/moban/sp', SanPhamQLController.MoBanSanPham);

//Kích hoạt chế độ khóa sản phẩm ở trang quản lý SP chi tiết
router.put('/QlSp/Admin/huyban/sp', SanPhamQLController.HuyBanSanPham);

//Thêm size cho sp ở trang quản lý SP chi tiết
router.put('/QlSp/Admin/suasize/sp', SanPhamQLController.SuaSizeSanPham);

//Xóa sản phẩm
router.delete('/QlSp/Admin/:idsanpham', SanPhamQLController.XoaSanPham);

module.exports = router;
