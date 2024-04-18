const display=document.querySelector('.display')
const allDigits=document.querySelectorAll('.digit')
const allClear=document.querySelector('.AC')
const delchar=document.querySelector('.delchar')

// Function for inputting numbers

function inputDigit(){
    if (display.textContent === '0'){
        display.textContent='';
    }
    if (display.textContent.length>=9){
        return;
    }
    else{ 
        display.textContent+=this.textContent;
    }
}

// Function to  clear the screen

function clear(){
    display.textContent='0'
}
// Function to delete the previous character

function delCharFn(){
    if (display.textContent.length !== 1){ 
        display.textContent=display.textContent.slice(0,-1)
    }
    else{
        display.textContent='0';
    }
}


// Event Listeners

delchar.addEventListener('click',delCharFn)

allClear.addEventListener('click',clear)

for (let digit of allDigits){
    digit.addEventListener('click',inputDigit);
}

