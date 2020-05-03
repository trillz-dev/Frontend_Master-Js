// document.querySelector("ul").lastElementChild.innerHTML = "tomiwa"

document.querySelector("body").style.backgroundColor = "blue"

// background.style.backgroundColor = "blue";

const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
//    e.preventDefault();
//    btn.classList.toggle('btnColorChange') 
// });


const myForm = document.querySelector('#my-form');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#btn');


myForm.addEventListener('submit', (onSubmit) => {
    onSubmit.preventDefault();
    console.log(firstNameInput.value)
})




