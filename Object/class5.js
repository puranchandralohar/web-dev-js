// Prototype -
// every object in JS has a prototype, and a prototype is also an object.

// const moreHobbies = {
//     "hobby3":"Reading",
//     "hobby4":"Writing",
// }



// const hobbies = {
//     "hobby1":"Singing",
//     "hobby2":"Dancing",
// }

// const combinedHobbies = Object.assign({},hobbies,moreHobbies);

// const newHobby = Object.create(combinedHobbies);
// newHobby.hobby6 = "Painting";
// console.log(newHobby.hasOwnProperty);

// console.log(newHobby);

// prototype chain - 

// Constructor Function

// let student1 = {
//     name:"Sangeeta",
//     age:18,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// let student2 = {
//     name:"Nisha",
//     age:80,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// const obj = {}

// obj.name = "punam"
// obj.age = 20

// console.log(obj);


// function Student(a,b){
//     // Student 
//     // {} = this keyword

//     this.studentName = a;
//     this.age = b;

//     this.printDetails = function(){
//         console.log(`Hey, I am ${this.studentName} and I am ${this.age} years old`);
//     }

//     // return this
//     // return student
// }

// new keyword- 
// 1. It creates a new empty object.
// 2. It attach the value of this keyword to the new empty object.`
// 3. It returns the newly created object. it return this keyword.

// const punam = new Student("Punam",20);
// const komal = new Student("Komal",21);
// const Shalini = new Student("Shalini",21);
// const Radhika = new Student("Radhika",21);

// console.log(punam.age);
// // console.log(komal);
// console.log(Shalini);
// Radhika.printDetails();

// Desturcturing - 

// let arr = [1,2,3, 4,5,6,7,8,9,10,11,12];
// // let firstIndex = arr[0];
// // let secondIndex = arr[1];
// // let thirdIndex = arr[2];

// // console.log(firstIndex,secondIndex,thirdIndex);

// let [,,,,,,,,,,,twelve] = arr;

// console.log(twelve);

let student = {
    name:"Puran",
    age:15,
    location:"Beng",
    number:"9",
    phone:"1234567890"
}

let {name,...rest} = student;

console.log(rest);
