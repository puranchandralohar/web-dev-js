// let arr = []; // OR let arr = new Array();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);



// let arr = ["Riya", "Raj", "Trupti"];
// console.log(arr);

// arr[1] = "Sapna";
// console.log(arr);

// arr[3] = "Raj";
// console.log(arr);


// let arr = ["Riya", "Raj", "Trupti"];
// console.log(arr.length);



// let arr = ["Surat", { name: "Riya" }, 10, true, function () { console.log("Hello") }];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[1].name);
// arr[4]();


// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

// console.log(arr[2]);
// console.log(arr[arr.length - 1]);

// console.log(arr[-1]); // undefined
// console.log(arr.at(-1));


// Methods of Array
// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

// console.log(arr);
// arr.push("Komal");
// console.log(arr);

// arr.push("Vaishnavi", "Anjali");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("Komal");
// console.log(arr);



// let arr = ["Preeti", "Priyanka"];

// arr.push("Sailikitha", "Gayatri");
// arr.unshift("Sheetal", "Renuka");

// arr.pop();

// console.log(arr);



// let arr = ["Shikha"];

// let newArr = arr;

// console.log(arr === arr1);

// newArr.push("Sheetal");

// console.log(arr);




// let arr = [];
// arr[0] = "Riya";
// console.log(arr);

// arr[2] = "Raj";
// console.log(arr);

// arr[99] = "Trupti";
// console.log(arr);

// console.log(arr.length);
// console.log(arr);



// Loops in Array

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// let arr = [1, 2, 3, 4, 5];

// for(let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// for(let index = arr.length - 1; index >= 0; index--) {
//     console.log(arr[index]);
// }



// let arr = [];
// arr[21] = "Akshata";

// console.log(arr.length);
// console.log(arr);



// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];
// arr.length = 3;
// console.log(arr);

// arr.length = 5;
// console.log(arr);
// console.log(arr[4]);



// let arr = new Array("Sheetal", "Samiksha", "Sushmita");
// console.log(arr);


// let arr = new Array(5);
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);




// Multidimensional Array

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);



// let arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(String(arr) === "1,2,3,4,5");


// console.log([1, 2] + [3, 4]);
// console.log([1,2,].length);
// console.log([1,2,,]);
// console.log([,,3,4]);
// console.log([1,2,] + [3,4]);
// console.log([1,2] + [,3,4]);



// console.log([1, 2] + 3);
// console.log([1, 2] + "3");
// console.log([] + 1);
// console.log('' + 1);
// console.log([7] + 1);
// console.log([7] + 1 + 2);


// console.log([] == []);
// console.log([2] == [2]);



// Array Methods

// 1. join()
// 2. reverse()
// 3. slice()
// 4. splice()
// 5. concat()
// 6. indexOf()
// 7. lastIndexOf()
// 8. includes()
// 9. find()
// 10. findIndex()
// 11. filter()
// 12. map()
// 13. reduce()


// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

// delete arr[1];
// console.log(arr);

// console.log(arr[1]);

// let removedElements = arr.splice(1, 1);
// console.log(removedElements);

// arr.splice(1, 2);
// console.log(arr);
// console.log(arr.length);

// arr.splice(1, 1, "Sheetal");
// console.log(arr);


// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

// arr.splice(1, 2, "Sheetal", "Sushmita");
// console.log(arr);




// let arr = [1, 2, 3, 4, 5];

// arr.splice(0, 2 , 6, 7, 8);
// console.log(arr);

// arr.splice(0, 0, 6, 7, 8);
// console.log(arr);

// arr.splice(-1, 0, 6, 7, 8);
// console.log(arr);