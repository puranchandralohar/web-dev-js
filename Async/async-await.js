// Async-Await - better way of writing promises, syntatic sugar over promises
// better way of writing async code in javascript


function sayName(){
   return new Promise((resolve, reject)=>{
         setTimeout(()=>{
                console.log("Hello there");
              resolve("Hello there");
         }, 5000)
    })
}

async function sayHii(){
    return 1
}

// async before a function always returns a promise
// what ever you return from the function will be the resolved value of the promise
// if you return nothing then it will be undefined

// console.log(sayHii());
// sayHii().then((value)=>{
//     console.log(value);
// })

// await - can only be used inside async function
// await will wait for the promise to be resolved

// async function execute(){
//     let name = "Amit";
//     let value = await sayName();
//     console.log(name);
// }

// execute();



// function preparedFood(){
//     return new Promise((resolve, reject)=>{
//         let rice = true;
//         if(rice){
//             setTimeout(()=>{
//                 resolve("Food is being prepared and delivered to your table");
//             }, 7000)
//         }
//         else{
//             reject("Food is not available");    
//         }
//     })
// }


// function eating(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Eating Food");
//         }, 3000)
//     })
// }


// function payment(){
//     return new Promise((resolve, reject)=>{
//         let moneyInWallet = true;
//         if(moneyInWallet){
//             setTimeout(()=>{
//                 resolve("Payment");
//             }, 2000)
//         }
//         else{
//             reject("No Money, Bhag jao or Washing plates");
//         }
      
//     })
// }


// function visitngHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Kheer");
//     preparedFood()
//     .then((value)=>{
//         console.log(value);
//         return eating();
//     }).then((value)=>{
//         console.log(value);
//         return payment();
//     }).then((value)=>{
//         console.log(value);
//     }).catch((error)=>{
//         console.log(error);
//     }).finally(()=>{
//         console.log("Thank you for visiting the hotel");
//     })
// }

// visitngHotel()

// try{

// }
// catch{

// }

// async function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Kheer");
//     try{
//         await preparedFood();
//         console.log("Food is being prepared and delivered to your table");
//         await eating();
//         console.log("Eating Food");
//         await payment();
//         console.log("Payment");
//     }
//     catch(error){
//         console.log(error);
//     }
    
   
// }

// visitingHotel();

// fetch(url, options) - return promise

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`)
//     .then((responce)=>{
//         console.log(responce);
//         return responce.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(data.name);
//         console.log(data.main.temp);
//         show.innerHTML = `City Name: ${data.name} <br> Temperature: ${data.main.temp}`;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// let key = `32e25ddb7aff17520c56f00c709a091e`
// async function fetchingdata(){
//     try{
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${key}`)
//         console.log("Data is being fetched");
//         let jsondata = await response.json();
//         console.log("Data is being converted into json");
//         console.log(jsondata);
//     }
//     catch(error){
//         console.log("Error", error);
//     }
    
// }

// fetchingdata();


// const fetchingdata = async ()=>{
//     try{
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${key}`)
//         console.log("Data is being fetched");
//         let jsondata = await response.json();
//         console.log("Data is being converted into json");
//         console.log(jsondata);
//     }
//     catch(error){
//         console.log("Error", error);
//     }
    
// }
// fetchingdata();


// basic - scope, variables, operators, hoisting
// array , string methods
// functions
// objects
// Callback, 
// Callback hell, 
// promise, 
// Promise Chaining , 
// promise methods, - all, race, any , allSettled
// fetch , 
// async-await
// Clousres
// Prototypes
// Event Loop


// throtliing, debouncing, memoization, currying,

// Dom - 2 hours
// Selectors,eventListreers, // Event bubbling, capturing

// Classes