const score = [5,6,7,8,9]
score.forEach(function(element, index) {
    console.log(`${index}:${element}`)
})
// Khởi tạo mảng điểm số
let scores = [5, 10, 15, 20];

// push: Thêm phần tử vào cuối mảng
scores.push(11);
console.log(scores); // [5, 10, 15, 20, 11]
// pop: Lấy phần tử cuối của mảng
let phanTuCuoi = scores.pop();
console.log(phanTuCuoi);

// shift: Lấy phần tử đầu của mảng
let phanTuDau = scores.shift();
console.log(phanTuDau);

// sort: Sắp xếp vị trí của các phần tử
const ages = [10, 20, 5, 7, 9, 55];

// Sắp xếp tăng dần
ages.sort((a, b) => a - b);
console.log(ages);

// Sắp xếp giảm dần
ages.sort((a, b) => b - a);
console.log(ages);

// Sắp xếp tên theo bảng chữ cái
const names = ["Long", "AnKhoi", "MinhKhoi", "SonHung", "TrungTruc"];
names.sort();
console.log(names);

// Danh sách đối tượng students
const students = [
  {
    name: "long",
    age: 20
  },
  {
    name: "Hung",
    age: 55
  },
  {
    name: "AKhoi",
    age: 60
  },
  {
    name: "MKhoi",
    age: 88
  },
  {
    name: "TTruc",
    age: 18
  }
];
//tăng dâng
students.sort((a, b) => a - b);
console.log(students);

// Sắp xếp giảm dần
students.sort((a, b) => b - a);
console.log(students);

names.fill("TrungTruc",1,3)
console.log(names)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];

// find(): Trả về phần tử đầu tiên thỏa điều kiện
let kqFind = numbers.find((element) => element > 5);
console.log(kqFind); // Kết quả: 6

// findIndex(): Trả về vị trí phần tử đầu tiên thỏa điều kiện
let kqFindIndex = numbers.findIndex((element) => element > 11);
console.log(kqFindIndex); // Kết quả: -1 (không có phần tử thỏa điều kiện)

// indexOf(): Trả về vị trí phần tử trong mảng (nếu không có thì trả về -1)
let kqIndexOf = numbers.indexOf(100);
console.log(kqIndexOf); // Kết quả: -1 (không có 100 trong mảng)

// some(): Kiểm tra xem có ít nhất một phần tử thỏa điều kiện không
let kqSome = numbers.some((number) => number % 2 === 0);
console.log(kqSome); // Kết quả: true (vì có nhiều số chẵn)

// includes(): Kiểm tra phần tử có tồn tại trong mảng không
let kqIncludes = numbers.includes(5);
console.log(kqIncludes); // Kết quả: true

// every(): Kiểm tra tất cả phần tử có thỏa điều kiện không
let kqEvery = numbers.every((number, index) => number >= 2);
console.log(kqEvery); // Kết quả: false (vì có số 0 và 1 nhỏ hơn 2)
