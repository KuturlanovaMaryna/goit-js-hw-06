const myInput = document.querySelector('#name-input' );
const myOutput = document.querySelector('#name-output');

myInput.addEventListener('input', newInput);

function newInput(e) {
    
    myOutput.textContent = e.currentTarget.value;

    if (e.currentTarget.value === "") {
        myOutput.textContent = 'Anonymous'
    }
}