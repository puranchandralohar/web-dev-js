console.log('DOM.js loaded');

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[0].style.backgroundColor = "red";

// boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "red";

// document.querySelector("#red").style.backgroundColor = "red";

// console.log(document.querySelectorAll(".box"));

// document.querySelectorAll(".box").style.backgroundColor = "green";  // This will not work

document.querySelectorAll(".box").forEach(elem => {
    console.log(elem);
    // elem.style.backgroundColor = "green";
})