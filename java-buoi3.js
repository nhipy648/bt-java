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

    // alert("tiền lương là:" + salary);

    const wrapper1El= document.getElementById("wrapper1");
    const salaryEl = document.getElementById("OfNumber1");
    console.log("salaryEl",salaryEl);

    wrapper1El.style.display = "block";
    salaryEl.innerHTML = salary.toLocaleString()+VND;
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

    // alert("trung bình 5 só là:" + average);
    const wrapper2El= document.getElementById("wrapper2");
    const averageEl = document.getElementById("OfNumber2");
    console.log("averageEl",averageEl);

    wrapper2El.style.display = "block";
    averageEl.innerHTML = average;
  
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
    //  alert("tiền quy đổi thành VND là:" + exchange + " " +"VND");
    const wrapper3El= document.getElementById("wrapper3");
    const exchangeEl = document.getElementById("OfNumber3");
    console.log("exchangeEl",exchangeEl);

    wrapper3El.style.display = "block";
    exchangeEl.innerHTML = exchange.toLocaleString()+"VND";
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
    //  alert("chu vi là:" + " "+ chuVi +" "+"-"+" "+"diện tích là:"+" "+ dienTich ); 
    const wrapper4El= document.getElementById("wrapper4");
    const chuViEl = document.getElementById("OfNumber4");
    const dienTichEl = document.getElementById("OfNumber5");
    console.log("chuViEl",chuViEl);
    console.log("dienTichEl",dienTichEl);
    wrapper4El.style.display = "block";
    chuViEl.innerHTML = chuVi;
    dienTichEl.innerHTML = dienTich;
     
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
    const result = so_hang_dv + so_hang_chuc ;
    // const Results = num.toFixed(TongSo);
    // alert("tổng 2 ký số là:" + " "+ Math.floor(Results) ); 
    const wrapperEl= document.getElementById("wrapper");
    const resultEl = document.getElementById("OfNumber");
    console.log("resultEl",resultEl);

    wrapperEl.style.display = "block";
    resultEl.innerHTML = Math.floor(result);
    
}
