// Counter App
// in
// hasOwnProperty
// Freeze
// Loop - for-in
// Questions with loops
// Refrence and Value
// Object.assign
// Spread Operator
// Constructor Function

// Question
// create a object with 3 properties
// key1 - value
// key2 - increment (method)
// key3 - decrement (method)
// value will increase by 1  - increment()
// value will decrese by 1  - decrement()

// const counterApp = {
//     value:0,
//     increment(){
//         console.log(this.value = this.value + 1);
//     },
//     decrement(){
//         console.log(this.value = this.value - 1);
//     },
//     reset(){
//         console.log(this.value = 0);
//     }
// }

// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// counterApp.reset();
// counterApp.decrement();
// counterApp.decrement();
// counterApp.decrement();
// counterApp.decrement();

// Question
// Snake Game Functionality
// value = 0;
// Ladder - value will increase by 10
// Snake - value reset to 0
// Random between 1 to 6 //6  Math.random()
// Move - Increment the value by random number

// in and hasOwnProperty
// const person = {
//     name:"Alka",
//     age:20,
// }
// console.log("age" in object);
// console.log("toString" in object);  - Check Prototypes also

// console.log(person.hasOwnProperty("age"));
// console.log(object.hasOwnProperty("toString")); - doesn't check Prototypes


// Freeze - Object.freeze()
// const person = Object.freeze({
//     name:"Alka",
//     age:20,
// });

// person.location = "Kanpur";
// person.job = "developer";

// const person = {
//     name:"Alka",
//     age:20,
// };

// Object.freeze(person);
// delete person.name;
// person.name = "Vaishnavi";

// console.log(person);

// const items = {  
//     "apple":2,
//     "orange":3,
//     "mango":4,
// };

// console.log(items.orange)
// console.log(items);

// Access the key and value
// const keys = Object.keys(items);
// const value = Object.values(items);
// console.log(keys);
// console.log(value);

// for - in loop
// for(let keys in items){
//     // console.log(items);
//     // console.log(keys); 
//     console.log(items[keys] * 2);
// }

// Question
// create an object with 5 employees salary and
//  you have to increase the salary by 1000;

// const employees={
//     e1:100,
//     e2:200,
//     e3:300,
//     e4:400,
//     e5:500,
// };

// for (let keys in employees){
//     console.log(employees[keys]+1000)
// }

// Reference and Value
// premetive data type, non-premetive data type

// let a = "Punam";
// let b = a;  //Copy the value

// a = "Vaishnavi";

// console.log(a);
// console.log(b);

// Copy Reference

// let a = {
//     name:"Punam",
// }

// let b = a; // Same memory location, Same variable

// delete a.name;

// console.log(a);
// console.log(b);

// vaishnavi , vaishnavi

// Object.assign()
// Spread Operator





