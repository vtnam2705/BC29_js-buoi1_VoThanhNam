// Bai tap 1
/*
    - Input: 
        + Lương 1 ngày 100.000

    - Xử lý: 
        + Nhập số ngày làm 
        + Lương nhân viên = lương 1 ngày * số ngày làm 

    - Output: Tiền lương nhân viên
*/

var soNgayLam = 10;
var luongNgay = 100000;
var luongNhanVien = soNgayLam * luongNgay;
console.log(`Lương nhân viên trong ${soNgayLam} ngày là: ${luongNhanVien} VND`); 



// -----------------------------------------------------------------------------
// Bài tập 2
/*
    - Input: 
        + Nhập 5 số thực (a, b, c, d, e)

    - Xử lý:  
        + Tính trung bình của 5 số = (a + b + c + d + e) / 5 

    - Output: giá trị trung bình
*/

var so1 = 151;
var so2 = 152;
var so3 = 153;
var so4 = 154;
var so5 = 155;
var trungBinh = (so1/5 + so2/5 + so3/5 + so4/5 + so5/5);
console.log(`Giá trị trung bình của 5 số là: ${trungBinh}`);


// ------------------------------------------------------------------------------
// Bài tập 3
/*
    - Input: 
        + Giá USD : 23.500 vnd
        + Nhập số tiền USD
    - Xử lý:  
        + Quy đổi USD sang VNĐ = giá USD * 23.500 

    - Output: Giá quy đổi USD sang VNĐ
*/

var giaUsd = 2;
var giaVnd = 23500;
var quyDoi = giaUsd * giaVnd;
console.log('Giá quy đổi USD sang VNĐ: ' + quyDoi + ' VNĐ');



// --------------------------------------------------------------------------------
// Bài tập 4
/*
    - Input: 
        + Nhập chiều dài 
        + Nhập chiều rộng 
    - Xử lý:  
        + Tính diện tích = chiều dài * chiều rộng 
        + Tính chu vi = ( chiều dài + chiều rộng ) * 2 

    - Output: xuất diện tích và chu vi hình chữ nhật
*/

var chieuDai = 15;
var chieuRong = 16;
var chuVi= (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;
console.log("Chu vi hình chữ nhật: " + chuVi);
console.log("Diện tích hình chữ nhật: " + dienTich);



// -------------------------------------------------------------------------------
// Bài tập 5
/*
    - Input: 
        + Nhập một số có hai chũ số
    - Xử lý:  
        + Tính diện tích = chiều dài * chiều rộng 
        + Tính chu vi = ( chiều dài + chiều rộng ) * 2 

    - Output: xuất diện tích và chu vi hình chữ nhật
*/

var number = 62;
var donVi = Math.floor(number % 10);
var hangChuc = Math.floor(number / 10);
var tong2So = donVi + hangChuc;
console.log("Tổng 2 số: " + tong2So);