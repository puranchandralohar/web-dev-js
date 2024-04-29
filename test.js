// const array = [1,2,3];
// const result = array[3];

// console.log(result);
 
// const result = "2024" - "1992";

// console.log(result);

// + = addition operator, concating two strings

// let value = 9;
// const result = value--

// post increment - assign the value first then increment the value
// post decrement - assign the value first then decrement the value

// pre increment - increment the value first then assign the value
// pre decrement - decrement the value first then assign the value

// console.log(result); // 8 // 9
// console.log(value); //8 //8

// console.log("10"+20+30) //left to right

// console.log(typeof (1+"1"+1));  

// string+Number = string
// number+string = string

// console.log(2 + 3 + "7");

// console.log(3 > 2 > 1);

// false 
// 3 < 2 = false
// 0 > 1 = false

// console.log(0.3===0.3);

// var name = "Punam";
// console.log(`Hello, ${name}!`);
// name = "Anjali";
// hello punam

// let num = 10;
// console.log(typeof typeof typeof typeof num);
//number
//string

// console.log(typeof typeof 1);  //"number"



//number
//string

// const numbers = [1, 2, 3];
// numbers[10] = 11;

// [1,2,3,undefined,undefined,undefined,undefined,undefined,undefined,undefined,11]

// console.log(numbers);

// var a = 10;
// (function () {
//   console.log(a);
//   let a = 9;
// })();

// 9
// 10
// undefined - hoisting

// var x = 5;
// (function () {
//   var x = 10;
//   console.log(x);
// })();  //Variable shadowing

// const groceries = ['banana', 'apple', 'peanuts'];

// console.log(groceries.indexOf('banana'))

// if (!!0){
//   console.log('We have to buy bananas!');
// } else {
//   console.log(`We don't have to buy bananas!`);
// }

// function addToList(item, list) {
//     return list.push(item);
//   }
  
//   const result = addToList('apple', ['banana']);
//   console.log(result);

// [ 'banana', 'apple'] 

// function arr(array){
//     console.log(array.shift());
//     console.log(array);
// }

// arr(["hello",1,2,3,4])

// shift, pop - Element
// unshift, push - length

// function calculate(num, callback) { //higher order function
//     // num = 4;
//     // callback = addOne;

//     return callback(num * 2);   //addone(8)     //callback(8)

//   }
  
//   function addOne(num) {  //callback(8)
//     // num= 8;
//     return num + 1;
//   }
  
//   console.log(calculate(4, addOne));  //calculate(4, addOne) 
  
// function greet(name, fun1) {
//     return "Hello, " + fun1(name);
//   }
  
//   function uppercaseName(name) {
//     return name;
//   }
  
//   console.log(greet("Vishakha", uppercaseName));
  

// VISHAKA
// Hello, VISHAKA

// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

//FTS
//Second, First, Third


// const obj = {
//     name: "Mahi",
//     age: 42,
//     address: {
//       city: "Ranchi",
//       country: "INDIA"
//     }
//   };
//   const newObj = Object.assign({}, obj);
//   newObj.name = "Virat";
//   console.log(obj.name);


// TDZ, Hoisting, Map, Filter, reduce , Freeze, IIFE, CounterApp
// Trim, HOF, setTimeOut, variable Shadowing,
// Callback Function, Spread Operator, this


// hositing- 
// temporal dead zone - 
// temporal dead zone is a time 
// between the variable creation and the variable initialization
  // console.log(name)
//   console.log(x);
// //  const name = "Punam";
//  var x= 10;


// var x = 10;

// {
//   console.log(x);
//   const x = 20;
//   // console.log(x);
// }









