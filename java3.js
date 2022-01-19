// bt1: 
// đầu vào :
// số ngày do người dùng nhập
// các bước thực hiện:
// b1: tạo biến là số số tiền lương
// b2: Dùng JS gọi tới API của browser để DOM tới tag HTML
// b3: tạo function cho button để thực hiện tính khi người dùng click
// b4:dom tói số ngày
// b5:tạo phép tính
// b6: xuất ra mnf hình kết quả

const luong = 100000;
const submitEl = document.getElementById("submit");
submitEl.onclick = function(evt){

    console.log(evt.target);
    const numberOfDay = document.getElementById("numberOfDay").value;
    const salary = numberOfDay * luong;
    console.log("tiền lương là:", salary);
    alert("tiền lương là:" + salary);

};

//   bt2:
//  đầu vào :
// 5 số ngày do người dùng nhập
// các bước thực hiện:
// b1: Dùng JS gọi tới API của browser để DOM tới tag HTML
// b2: tạo function cho button để thực hiện tính khi người dùng click
// b3:dom tói 5 số
// b4:tạo phép tính 
// b5: xuất ra màn hình kết quả

const submit2El = document.getElementById("submit2");
submit2El.onclick = function(evt){
    console.log(evt.target);
    const first = +document.getElementById("first").value;
    const second = +document.getElementById("second").value;
    const third = +document.getElementById("third").value;
    const four = +document.getElementById("four").value;
    const fifth = +document.getElementById("fifth").value;
    const average = (first + second + third + four + fifth ) / 5;

    alert("trung bình 5 só là:" + average);
  
};

// bt3:
//  số tiền USD do người dùng nhập
// các bước thực hiện:
// b1: tạo biến là số tiền quy đổi  
// b2:Dùng JS gọi tới API của browser để DOM tới tag HTML
// b3: tạo function cho button để thực hiện tính khi người dùng click
// b4:dom tói số tiền người dung nhập
// b5:tạo phép tính 
// b6: xuất ra màn hình kết quả

const VND = 23500
const submit3El = document.getElementById("submit3");
submit3El.onclick = function(evt){
    const numberOfMoney = +document.getElementById("numberOfMoney").value;
    const exchange = numberOfMoney * VND;
     alert("tiền quy đổi thành VND là:" + exchange + " " +"VND");
};

// bt4
//  chiều dài và rộng do người dùng nhập
// các bước thực hiện:  
// b1:Dùng JS gọi tới API của browser để DOM tới tag HTML
// b2: tạo function cho button để thực hiện tính khi người dùng click
// b3:dom tói chiều dài và chiều rộng do người dung nhập
// b4:tạo phép tính diện tích và chu vi 
// b5: xuất ra màn hình kết quả
const submit4El = document.getElementById("submit4");
submit4.onclick =  function(evt){
    const dai = +document.getElementById("chieuDai").value;
    const rong = +document.getElementById("chieuRong").value;
    const chuVi = (dai + rong) * 2 ;
    const dienTich = dai * rong ;
    alert("chu vi là:" + " "+ chuVi +" "+"-"+" "+"diện tích là:"+" "+ dienTich ); 
};

// bt5
//  số 2 chữ số do người dung nhập
// các bước thực hiện:  
// b1:Dùng JS gọi tới API của browser để DOM tới tag HTML
// b2: tạo function cho button để thực hiện tính khi người dùng click
// b3:dom tới số do người dùng nhập
// b4:tạo phép tính lấy hàng đơn vị và hàng chục 
// b5: xuất ra màn hình kết quả đã làm tròn số

const submit5El = document.getElementById("submit5");
submit5.onclick = function(evt){
    
    const numBer = +document.getElementById("numBer").value;
    const so_hang_dv = numBer % 10; 
    const so_hang_chuc = numBer / 10; 
    const Results = so_hang_dv + so_hang_chuc ;
    // const Results = num.toFixed(TongSo);
    alert("tổng 2 ký số là:" + " "+ Math.floor(Results) ); 
}