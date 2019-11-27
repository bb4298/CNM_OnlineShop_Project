const api_helper = require('../routes/API_helper');
const domain = require('../Config/ServerDomain');

module.exports = {
  /*  HienThiChiTietSanPham:function(req, res, next) {
        var idsp = req.params.id ;

        api_helper.API_Call_Get(domain+'/SanPhams/'+idsp)
            .then(response => {
                var listSize ;
                var result=[];
                var spData;
                response.Items.forEach(function (item) {
                    spData = {ID_SanPham:item.ID_SanPham, TenSanPham:item.TenSanPham.Ten,TongQuan:item.MoTa.TongQuan,ChiTiet:item.MoTa.ChiTiet,NoiSanXuat:item.ThongTin.NoiSanXuat,CheDoBaoHanh:item.ThongTin.CheDoBaoHanh,PhuKienTheoKem:item.ThongTin.PhuKienTheoKem,Gia:item.Gia,TiLeSale:item.TiLeSale, Avatar:item.Anh.Avatar,AvtDetail1:item.Anh.AvtDetail1,AvtDetail2:item.Anh.AvtDetail2,SoLuong:item.SoLuong};

                });
                response.Items.forEach(function (item) {
                    listSize = item.Size;
                    /!*listSize = {Size:item.Size};*!/
                });
                for(var item in listSize)
                {
                    result.push(item);
                }
                if(typeof spData == "undefined"){
                    res.render('error.ejs', { error:{status:404}  });

                }else {
                    res.render('./SanPham/ChiTietSanPham.ejs', {domain: domain, title: 'Chi Tiết Sản Phẩm', spData: spData, listSize:listSize,result:result ,key:"SP"});
                }

            })
            .catch(error => {
                res.render('maintain.ejs');
            });
    }*/
    HienThiChiTietSanPham:function(req, res, next) {
        var idsp = req.params.id ;

        api_helper.API_Call_Get(domain+'/SanPhams/'+idsp)
            .then(response => {
                var listSize =[] ;
                var spData;
                response.Items.forEach(function (item) {
                    spData = {ID_SanPham:item.ID_SanPham, ID_ThuongHieu:item.ID_ThuongHieu,ID_DanhMuc:item.ID_DanhMuc,TenSanPham:item.TenSanPham.Ten,MoTa:item.MoTa,ThongTin:item.ThongTin,Gia:item.Gia,TiLeSale:item.TiLeSale,NgayTao:item.NgayTao,Size:item.Size,TrangThaiBan:item.TrangThaiBan, Anh:item.Anh};
                });
                if(spData == null){
                    res.render('error.ejs',{error:{status:404} });
                }
                spData.Size.forEach(function (item) {
                    var itemSize = {TenSize:item.TenSize,SoLuong: item.SoLuong};
                    listSize.push(itemSize);
                });
                if(typeof spData == "undefined"){
                    res.render('error.ejs', { error:{status:404}  });

                }else {
                    res.render('./SanPham/ChiTietSanPham.ejs', {domain: domain, title: 'Chi Tiết Sản Phẩm', spData: spData, listSize:listSize ,key:"SP"});
                }

            })
            .catch(error => {
                res.send(error);
                // res.render('maintain.ejs');
            });
    }

};