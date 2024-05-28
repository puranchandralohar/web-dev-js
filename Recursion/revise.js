// Recursive Function - Function calling itself

// 1. base condition - stop the function calling
// 2. recursive condition - function calling itself

// function calling(){
//     if(condition){
//         Stop Calling the function     //base condition
//     }
//     calling();  // recursive condition
// }

// calling();

// Counter - 5 to 1

// function counter(number){
//     if(number < 1){     // base condition
//         return 1;
//     }
//     console.log(number);
//     counter(number-1)
// }

// counter(5);

// 5
// 4
// 3
// 2
// 1

// Factorial of a number
// 2 = 2*1 = 2
// 3 = 3*2*1 = 6
// 4 = 4*3*2*1 = 24

// function factorial(num){
//     if(num == 0){
//         return 1
//     }
//     return num * factorial(num-1)
// }

// console.log(factorial(4));


// Call Stack  - LIFO (Last In First Out)

// 4 * factorial(3); 4 * 6 = 24
// factorial(3) = 3 * factorial(2); = 3 * 2 =6
// factorial(2) = 2 * factorial(1); = 2 * 1 = 2
// factorial(1) - 1* factorial(0); = 1 * 1 = 1
// 1 (Factorail(0))


