// const student1 = {
//     name:"Sangeeta",
//     age:18,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`); 
//     }
// }

// const student2 = {
//     name:"Nisha",
//     age:80,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`); 
//     }
// } 

// const student3 = {
//     name:"Eram",
//     age:100,
//     printDetails(){
//         console.log(`Hey, I am ${this.name} and I am ${this.age} years old`); 
//     }
// }
// console.log(student1);
// console.log(student2);
// console.log(student3);

//Dry Principle  - Don't Repeat Yourself

// Factory Function
// Constructor Function

// Factory Function - Function that returns an object


let printing = {
    printDetails(){
        console.log(`Hey, I am ${name} and I am ${age} years old`); 
    }
}

let passout = {
    printPassout(){
        console.log(`Hey, I am ${name} and I am passout`);
    }
}



// function createStudent(name,age){
//     return {
//         name:name,
//         age:age,   
//     }
   
// }

function createStudent(name,age){
    let studentproto = Object.create(printing);
    studentproto.name = name;
    studentproto.age = age;

    return studentproto;
  
}

let student1 = createStudent("Sangeeta",18);
// let student2 = createStudent("Nisha",80);
let student3 = createStudent("Eram",1);


console.log(student1,"student1");
// console.log(student2);
console.log(student3,"student3");


// student1.printDetails = printing.printDetails;
// student2.passoutNisha = passout.printPassout;
// student3.printDetails = printing.printDetails;

// console.log(student1);
// console.log(student2);
// console.log(student3);

// student1.printDetails();
// student2.printDetails();
// console.log(student3);

// Object.create() method - 
// It creates a new object, using an existing object as the prototype of the newly created object.