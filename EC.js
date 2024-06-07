// Global Execution Context

// 1. Memory Creation Phase
// 2. Code Execution Phase

// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);


// Call Stack - LIFO
// Call stack is a data structure that records where in the program we are.
// Call stack maintains the order of execution of the functions of execution context.

// Call stack is also known as:-
// 1. Execution Context Stack.
// 2. Program Stack.
// 3. Control Stack.
// 4. Run-time Stack.
// 5. Machine Stack.


// Event Loop

// Event Loop is a mechanism that makes sure that the call stack is empty.
// Event Loop is responsible for executing the callback functions.

// 1 console.log('Start');
// 2 setTimeout(function cb() {
// 3    console.log('Callback');
// 4 }, 5000);
// 5 console.log('End');

// Event loop checks whether the call stack is empty or not. If the call stack is empty then it checks the message queue. If the message queue has any callback function then it pushes the callback function to the call stack.This process is repeated until the call stack is empty.
// This queue is also known as:-
// 1. Callback queue
// 2. Task queue
// 3. Message queue
// 4. Event queue

// Task Queue :-
// 1. Microtask Queue
// 2. Macrotask Queue / Callback Queue

// Microtask Queue has higher priority than Macrotask Queue.
// If task inside the Microtask Queue is executed then only the task inside the Macrotask Queue will be executed.
// And if the tasks inside the microtask queue are never ending then the tasks inside the macrotask queue will never be executed. This is known as starvation of task inside the macrotask queue.



// Data Hiding in JavaScript

// var count = 0;
// function add() {
//     count++;
// }
// add();
// console.log(count);



// function counter() {
//     var count = 0;
//     return function add() {
//         count++;
//         console.log(count);
//     }
// }
// console.log(count);
// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// console.log(count);


// Prototype in JavaScript - minified/smaller version

// Prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects.

// In JS, the base object is Object.prototype.


// Prototypal Inheritance:- In JS, objects inherit from objects. It is a mechanism where an object can inherit properties and methods from another object.