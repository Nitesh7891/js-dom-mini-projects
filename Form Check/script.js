// Create a form with input fields and a submit btn. use javascript to validate the form and display an error message if the input feild is invalid--

let form = document.querySelector('form');
let inputs = document.querySelectorAll('input[type="text"]')
let errors = document.querySelector('span');

form.addEventListener('submit',function(eve){
    eve.preventDefault();
    for(let i =0;i<inputs.length;i++){
        if(inputs[i].value == ''){
            errors.textContent = 'Some feilds are empty!'
            errors.style.color = 'red'
            break;
        }
    }
})
