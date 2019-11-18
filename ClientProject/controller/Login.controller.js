const api_helper = require('../routes/API_helper');
const domain = require('../Config/ServerDomain');
const soSP = require('../Config/SoSanPhamMoiTrang');

module.exports = {
    HienThiTrangDangNhap:function(req, res, next) {
        res.render('./Admin/DangNhap.ejs', {domain: domain, title: 'Đăng nhập Admin'});
    },
    KiemTraDangNhap:function (req,res,next) {
        api_helper.API_Call_Get(domain+'/auth/'+req.body.userName+'/'+req.body.passWord)
            .then(response => {
                if(response.status == "ok"){

                    res.cookie('token', response.token.toString());
                    res.cookie('userId',response.userId);
                    /*res.render('./Admin/QuanLySanPham.ejs', {domain: domain, title: 'Đăng nhập Admin'});*/
                    res.redirect('/admin/quanlysanpham');
                }
                else {
                    res.render('./Admin/DangNhap.ejs', {domain: domain, title: 'Đăng nhập Admin', err:'Sai thông tin đăng nhập, vui lòng nhập lại', values:req.body});
                }

            })
            .catch(error => {
                res.send("Web server chưa được bật, không lấy được data "+error);
            });

    },
};