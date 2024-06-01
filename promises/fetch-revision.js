// API - Application programming interface

// Fetch API - It is a way to make HTTP requests from the browser. 
// It returns a promise that resolves to the Response to that request, 
// whether it is successful or not. 
// You can also define a catch() method on the promise,
// which will be called if the request fails.


// HTTP request methods
// GET - Reading data from the server (database)
// POST - Creating data on the server
// PUT - Updating data on the server
// DELETE - Deleting data from the server


// Examples - 
// College Data - 
// Details, Personal Profile, Marks - Get API - Database (Fetch)
// Name, Roll No, Subjects - Database (Form Submit) - POST API - Database (Store)
// Roll No - PUT API - Database (Update)
// Delete - DELETE API - Database (Delete)


// fetch(url, options)

// url - universal resource locator
// options - method, credentials, body, headers {}

// Return Promise

// Examples


let input = document.getElementById("city");
let button = document.getElementById("btn");
let result = document.getElementById("result");


button.addEventListener("click",()=>{
    console.log("Button Clicked");
// let city = input.value; 
let key = `90f4da5ed64374056cbbbdeb97f0d832`

let url = `https://api.tvmaze.com/search/shows?q=${input.value}`

// let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`
let getData = fetch(url);

getData.then((responce)=>{
   return responce.json()
}).then((data)=>{
   data.map((ele)=>{
         console.log(ele.show.name);
         console.log(ele.show.rating.average);
         console.log(ele.show.genres);
         console.log(ele.show.image.medium);
         console.log(ele.show.summary);
         result.innerHTML = `<h1>${ele.show.name}</h1>
         <h2>${ele.show.rating.average}</h2>
         <h3>${ele.show.genres}</h3>
         <img src="${ele.show.image.medium}" alt="image">
         <p>${ele.show.summary}</p>`
   })
})
})







