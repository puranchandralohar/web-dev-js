// API - https://jsonplaceholder.typicode.com/users

// Fetch API
// Make a HTTP request to the server and get the data back.

// HTTP methods
// GET - Read
// POST - Create
// PUT - Update
// DELETE - Delete

// fetch() - return promise
// argments - URL, options


// let input = document.getElementById("city");
// let button = document.getElementById("btn");
// let show = document.getElementById("result");

// let key = `32e25ddb7aff17520c56f00c709a091e`
// // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

button.addEventListener("click",()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`)
    .then((responce)=>{
        console.log(responce);
        return responce.json();
    })
    .then((data)=>{
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        show.innerHTML = `City Name: ${data.name} <br> Temperature: ${data.main.temp}`;
    })
})




// fetch(url, options); - return promise
// https://dog.ceo/api/breeds/image/random
// https://official-joke-api.appspot.com/random_joke

let image = document.getElementById("image");



let url  = `http://www.omdbapi.com/?apikey=${c511abf9}&`;

let promise  = fetch(url);

// pending, fulfilled, rejected

promise.then((response)=>{
    if(response.status == 200){
        console.log(response);
       return response.json()
    }
})




   
    

