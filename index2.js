// // variable

// // var
// var greeter = "hey hay";
// var greeter = "hey halo";

// console.log(greeter);

// // let

// let greeter2 = "hey hay";
// let status = true;
// if ((status = true)) {
//   let greeter2 = "hey halo";
//   console.log(greeter2);
// }

// // const

// // const greeter3 = "hey hay"
// // const greeter3 = "hey halo"

// // console.log(greeter3);

// // flow for
// let angka = "";
// // for (let i = 0; i <= 9; i++) {
// //     angka += i;
// // }
// // console.log(angka);

// // while
// while (angka < 9) {
//   angka++;
//   console.log(angka);
// }

// // do while
// // let i = 0;
// // do {
// //     i = i + 1;
// //     angka = angka + i;
// // } while (i < 9)
// // console.log(angka);

// // function testNum(a) {
// //     let angka;
// //     if (a > 0) {
// //         angka = "positive"
// //     } else {
// //         angka = "negative"
// //     }
// //     return angka
// // }

// // console.log(testNum(-5))

// const fruit = "Oranges";

// switch (fruit) {
//   case "Oranges": {
//     console.log(" 1kg Oranges are 15.000");
//     break;
//   }
//   case "Banana": {
//     console.log(" 1kg Banana are 20.000");
//     break;
//   }
//   case "Watermelon": {
//     console.log(" 1kg Watermelon are 30.000");
//     break;
//   }

//   default :
//   console.log("Sorry , out of order");
// }


let fruits = ["banana", "melon", "apple", "blueberry", "strawberry"];

// if (fruits.length > 0) {
//     console.log(fruits)
// } else {
//     console.log("data kosong")
// }

// fruits.forEach( function (item, index, array) {
//     console.log(item,index)
// })

let addFruit = fruits.unshift("Orange")
console.log(fruits)