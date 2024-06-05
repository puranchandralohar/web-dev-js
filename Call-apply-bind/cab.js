// This Keyword - 

// Call, Bind and Apply are used to change the context of the this keyword.

// const tea = {
//     name: "Green Tea",
//     price: 100,
//     getPrice: function(){
//         console.log(this.price);
//     }
// }

// const coffee = {
//     name: "Cold Coffee",
//     price: 150,  
// }

// const juice = {
//     name: "Orange Juice",
//     price: 80,
// }

// // Call, Apply - Function Borrowing

// tea.getPrice.call(coffee);
// tea.getPrice.call(juice);

// var phone = {
//     company:"Nokia",
//     modal:"5G",
// }

// var laptop = {
//     company:"HP",
//     modal:"Elitebook",
// }

// var bike = {
//     company:"Royal Enfield",
//     modal:"Bullet",
// }

// function showprice(price, owner){
//     console.log(this.company + " " + this.modal + " "+price + " "+owner);
// }


// showprice.call(phone, 1000, "Puran")
// showprice.call(laptop, 50000,"Amit")
// showprice.apply(bike, [10000000,"Puran"])

// there is only one diffrence between call and apply
// call - directly pass an arguments
// apply - you have to use arrays


// Bind() method

var phone = {
    company:"Nokia",
    price:5000,
    printPrice: function(){
        console.log(this.price);   //phone.price
    }
}

var laptop = {
    company:"HP",
    price:70000,
}

// let res = phone.printPrice;
// res();


let res = phone.printPrice.bind(phone);
let res1 = phone.printPrice.bind(laptop);

res();
res1();

// Bind- it will return a function
// Bind- crete a funtion and store it in a variable and call it later


// let res = function(){
//     console.log(this.price);   //phone.price
//     console.log(1);
//     console.log("Hello");
// }

// // undefined
// //1
// //Hello

// res()

// let res = function(){
//     console.log(this.price);   //window.price
// }

// res()