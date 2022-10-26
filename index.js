console.log("hello dom");

let myCat = document.getElementById('cat');

myCat.style.backgroundColor = "red";
myCat.style.padding = "20px"
myCat.innerText = "meow"

let myMouse = document.getElementsByClassName("mouse");
let firstMouse = myMouse[0];
firstMouse.textContent = "squeak"
let secondMouse = myMouse[1];
secondMouse.textContent = "jerry"
let thirdMouse = myMouse[2];
thirdMouse.textContent = "mickey"

for(let i = 0; i <= myMouse.length; i++){
myMouse[i].style.backgroundColor = "yellow"
}

const myCatDiv = document.querySelector("#cat")

myCatDiv.addEventListener('click', () => {
    if (myCat.style.backgroundColor === "red"){
        myCat.style.backgroundColor = "blue"
    }else {
        myCat.style.backgroundColor = "red"
    } 
})

// myCatDiv.addEventListener('click', function(){

// if (myCat.style.backgroundColor === "red"){
//         myCat.style.backgroundColor = "blue"
//     }else {
//         myCat.style.backgroundColor = "red"
//     }
// });



let myButton = myButton.addEventListener("button")