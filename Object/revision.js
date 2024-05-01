// Data Types in JavaScript
// Primitive Data Types - Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive Data Types - Object, Array, Function


// Object - Object is a non-primitive data type in JavaScript. 
// It is a collection of key-value pairs. It is a reference data type.

// Four ways to create an object in JavaScript:
// 1. Object Literal
// 2. Constructor Function
// 3. Object.create() method
// 4. Class

//  1.Object Literal

    // let student = {};  //Empty Object
    // console.log(typeof student);

    // let student = {
    //     name:"Puran",
    //     age: 16,
    //     "permanet address" :"Bengal",
    // }

    // console.log(student);

// Accessing Object Properties

// dot
// bracket notation

// console.log(student.name)
// console.log(student["age"])

// console.log(Object.keys(student));
// console.log(Object.values(student));

// loop through object

// for - in loop
// for(let key in student){
//     console.log(student[key] )
// }

// Methods in Object
// Methods are functions that are stored as object properties.

// Arrow function
// const ArrowFunction = ()=>{

// }

// const user = {
//     name:"Puran",
//     sayHi:function(userName="Puran"){
//         return `Hello Good Morning , ${userName}`;  //method
//     },
//     sayBye(greet){
//         return `hello, good night , ${greet}`;  // short hand method
//     },
//     sayInSpanish:(greet)=>{
//         return `Hola ${greet}`;
//     }
// }

// console.log(user.sayHi)
// console.log(user.sayHi("Vishakha"))
// console.log(user.sayBye("See you tomorrow"));
// console.log(user.sayInSpanish("Buenos Dias"))

// this keyword in JavaScript
// this keyword refers to the parent object.
// Arrow Function does not have their own this keyword.


// const user = {
//     name:"Eram",
//     sayHi:function(){
//         console.log(this);
//         console.log(this.name);
//     },
//     sayBye:()=>{
//         console.log(this);
//         console.log(this.name);
//     }
// }


// this.name =  user.name
// console.log(user.name)
// user.sayHi();
// user.sayBye();

// In and hasOwnProperty

// const person = {
//     name:"Aditi",
//     age:25,
//     location:"bengal"
// }

// console.log("surname" in person); 
// console.log(person.hasOwnProperty("surname"));

// in - check in prototype chain
// hasOwnProperty - does not check in prototype chain

// Object.freeze() - Not able to modify the object

// const person = {
//     name:"Aditi",
//     age:25,
//     location:"bengal"
// }

// person.name = "Puran";
// let person2 = Object.freeze(person)

// // person.name = "Aditi";

// // person.age = 20;
// // delete person.location;

// person2.name = "Vaishnavi";
// console.log(person2);

// task
// renuka - to check wheather we can freeze a single property of an object or not

// reference and value

// let x = 10;
// let y = x;
// y=20;
// console.log(x);
// console.log(y);

// let name = "Puran";
// let name2 = name;

// name2 = "Vaishnavi";
// console.log(name);
// console.log(name2);

// const arr = [1,2,3,4,5];
// const arr2 = arr;

// arr2.push(6);
// console.log(arr);
// console.log(arr2);

// const obj1 = {
//     name:"Puran",
//     age:20
// }

// const obj2 = obj1;

// obj2.name = "Aditi";

// console.log(obj1);
// console.log(obj2);

// Object.assign() - shallow

// const obj1 = {
//     name:"Puran",
//     age:20,
//     address:{
//         permanent:"Bengal",
//         temporary:"Jharkhand",
//     }
// }

// const obj3 = {
//     location:"Bengal",
// }

// const obj2 = Object.assign({}, obj1)
// const obj2  = {...obj1}
// obj2.name = "Aditi";
// obj2.age = 30;
// obj2.address.permanent = "Delhi";
// console.log(obj1);
// console.log(obj2);
 
// // Spread Operator - shallow
// const obj2 = {...obj1,...obj3}
// console.log(obj2);

// shallow copy and deep copy

// Shallow Copy - 
// Only top level properties are copied. 
// Nested objects are copied by reference.
// Nested objects are not copied, they are referenced.

// Deep Copy
// All the properties are copied.

// stringify - convert object into string
// parse - convert string into object

const obj1 = {
        name:"Puran",
        age:20,
        address:{
            permanent:"Bengal",
            temporary:"Jharkhand",
        },
        sayHi(){
            console.log("Hello");
        },
    }

    const obj2 = JSON.parse(JSON.stringify(obj1));

    // obj2.name = "Aditi";
    // obj2.age = 30;
    // obj2.address.permanent = "Delhi";

    // console.log(obj1);
    // console.log(obj2);

    // Methods, Date function, Symbol

    // Lodash - Library - npm
    // cloneDeep() - deep copy

    // structuredClone() - deep

    // Task - Explore about structuredClone() method in JavaScript
    // and perform a deep copy.

    // Snake Game Functionallity
    // value = 0;
    // ladder = value will increase 10 times
    // snake = value will decrease to 0
    // move = 
    // it will generate random number between 1 to 6, and add the number to value


// const snakeGame ={
//     value:0,
//     ladder(){
//         return this.value = this.value + 10; 
//     },
//     snake(){
//         return this.value = 0;
//     },
//     move(){
//         let random = Math.floor(Math.random() * 7);
//         return this.value = this.value + random;
//     }
// }

// console.log(snakeGame.ladder());












