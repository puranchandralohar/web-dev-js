// Learn about primitive and non-primitive data types

// Objects

// Object literal

// let obj = {};

// let user = {
//     name: 'Alka',
//     age: 20,
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);

// user.city = 'Delhi';
// console.log(user);

// delete user.age;
// console.log(user);

// let keys = Object.keys(user);
// console.log(keys);

// let key1 = Object.keys(user)[0];
// let key2 = Object.keys(user)[1];
// console.log(key1, key2);

// let user1 = {
//     name: 'Alka',
//     age: 20,
//     'email id': "alka@navgurukul.org", // key with space
// };

// console.log(user1);
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.email id);
// console.log(user1["email id"]);
// console.log(user1["name"]);

// delete user1["email id"];
// console.log(user1);

// let user = {
//     name: 'Alka',
//     age: 20,
// };
// console.log(user);
// console.log(user.name);
// console.log(user.city);




// let fName = "Vaishnavi";

// let user2 = {
//     [fName]: "Anjali",
// };

// console.log(user2);
// console.log(user2.fName);
// console.log(user2.Vaishnavi);




// let fruit = "apple";
// let bag = {};

// bag[fruit] = 5;  //OR, bag.fruit = 5;

// console.log(bag);



// let fruit = "apple";
// let bag = {
//     [fruit + 'Computers']: 5,
// };

// console.log(bag);
// console.log(bag.appleComputers);




// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// OR

// function makeUser(name, age) {
//     return {
//         name,  // name: name,
//         age,  // age: age,
//     };
// }

// let user = makeUser("Alka", 20);
// console.log(user);



// function userDetails(name, age) {
//     return {
//         name,
//         age: age || 18,
//     }
// }

// let user1 = userDetails("Alka", 20);
// console.log(user1);

// let user2 = userDetails("Alka");
// console.log(user2);





// let obj = {
//     1 : "One",
// }

// console.log(obj);
// console.log(obj[1]);
// console.log(obj["1"]);



// Object.assign()

// let user1 = {a: 1, b: 2};
// let user2 = {c: 3, d: 4};

// let output = Object.assign(user1, user2);
// console.log(output);
// console.log(user1);
// console.log(user2);


// let output1 = Object.assign({}, user1, user2);
// console.log(output1);
// console.log(user1);
// console.log(user2);


// let user1 = {a: 1, b: 2};
// let user2 = {b: 3, c: 4};

// let output = Object.assign(user1, user2);
// console.log(output);

// let output1 = Object.assign(user2, user1);
// console.log(output1);

// let output2 = Object.assign({}, user1, user2);
// console.log(output2);

// let output3 = Object.assign({}, user2, user1);
// console.log(output3);