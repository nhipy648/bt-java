// bt 1: mô hình 3 khối
// đầu vào:
// người dùng nhập 3 số nguyên
// các bước xử lý:
// b1:tạo biến a b c tương ứng với 3 số nguyên cho người dung nhập
// b2: tạo mảng với 3 biến vừa nhập
// b3: dựa vào giá trị mản dùng hàm sort so sánh sắp xếp thứ tự
// b4: in ra console
// đầu ra: thứ tự 3 số nguyên a b c tăng dần
const a= 3;
const b = 9;
const c = 7;
let numArray = [a, b, c];
numArray.sort();
console.log("thứ tự số là:", numArray);

// bt2:
// / đầu vào:
// // người dùng là ai ( B, M, A, E )
// // các bước xử lý:
// // b1:tạo câu hỏi
// // b2: tạo biến cho người dùng nhập câu trả lời
// // b3: so sánh giá trị phù hợp với câu trả lời vừa nhập
// // b4: in ra console
// // đầu ra: câu chào hỏi phù hợp

console.log("người dùng là:");
const B = 1;
const M = 2;
const A = 3;
const E = 4;
let Addmin ;
Addmin = 2;
switch (Addmin) {
    case 1: {
        console.log("chào Bố")
        break;
}
    case 2: {
            console.log("chào Mẹ")
            break;
}
    case 3: {
                console.log("chào Anh")
                break;
}
    case 4:{
        console.log("chào em")
        break;
}}

// bt3:
// / đầu vào:
// // 3 số nguyên
// // b1: tạo biến 3 số nguyên 
// // b2: tạo điều kiệm kiểm tra 3 số nguyên là chẵn hay lẽ
// // b3: đếm sô chẵn và số lẻ
// // b3: in ra console
// // đầu ra:có bao nhiêu số chẵn và số lẽ

const d = 2;
const e = 7;
const f = 6;
let chan = 0;
let le = 0;
if( d % 2 == 0){
    chan++;
}else {
    le++;
}
if( e % 2 == 0){
    chan++;
}else {
    le++;
}
if( f % 2 == 0){
    chan++;
}else {
    le++;
}

console.log("tổng số chẵn là:",chan);
console.log("tổng số chẵn là:",le);

// bt4:
// / đầu vào:
// // 3 cạnh tam giác
// // b1: tạo biến 3 cạnh tam giác 
// // b2: kiểm tra xem là loại tam giác nào  
// // b3: in ra console
// // đầu ra:tam giác thuộc loại tam giác nào

const A1 = 6;
const B1 = 6;
const C1 = 5;
if(A1==B1 && B1==C1 ){
    console.log("Đây là tam giác đều");
} else if(A1==B1 || A1==C1 || B1==C1){
    console.log("Đây là tam giác cân");
} else if(A1*A1 + B1*B1 ==  C1*C1||A1*A1 + C1*C1 == B1*B1 ||   C1*C1 + B1*B1 == A1*A1 ){
    console.log("Đây là tam giác vuông");
}