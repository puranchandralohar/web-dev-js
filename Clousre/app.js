// Clousere -

// Scope -
// 1. Global Scope
// 2. Local Scope
// 3. Block Scope
// 4. Lexical Scope

// First Class Function
// 1. Function can be stored in a variable
// 2. Function can be passed as an argument
// 3. Function can be returned from another function

// function show(){
//     let a = 10;
//     return function show2(){

//         return function show3(){

//             console.log(a);
//         }
//     }

// }

// let result = show();
// let result2 = result()
// result2();

// Clousure -
// Functions can access variables from its parent scope even after the parent function has finished executing.
// Functions bundled together with its lexical environment form a clousure.
// updated value of a variable is available to the inner function.

// function add(a){
//     return function add1(){
//         console.log(a);
//     }
// }

// let result = add(5)
// result();

// var count = 0;
// const counter=()=>{
//    return ()=>{
//         count++
//         console.log(count);
//     }

// }

// let result = counter();
// result();
// result();
// result();
// result();

// function getCredential(){
//     let username = "Puran";
//     let password = "12345";
//     let count = 0;

//     return function(){
//         let credential = {
//             name:username,
//             pass:password
//         }
//         if(count == 3){   // 0 % 3 ==0 , 1%3 == 0
//             count+=1;        // 1
//             return credential;
//         }
//         count+=1;
//        return "false"
//     }
// }

// let result = getCredential();
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());

// function multiply(a){
//    return function mul1(b){
//        return function mul2(c){
//            return a*b*c;
//        }
//    }

// }

// Currying -

// let result = multiply(10)(5)(2);
// // let result1 = result(5);
// // let result2 = result1(2);
// console.log(result);

// function add(a,b){
//     console.log(a+b);
// }

// add(5,"Hello");
