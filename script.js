const display=document.querySelector('.display')
const allDigits=document.querySelectorAll('.digit')
const allClear=document.querySelector('.AC')
const delchar=document.querySelector('.delchar')
const dot=document.querySelector('.dot')
const operators=document.querySelectorAll('.operator')
const equal=document.querySelector('.equalto')
let first_operand=''
let second_operand=''
let operation=''
let result;

function add(a,b){
    result= parseFloat(a)+parseFloat(b);
    first_operand=result
    second_operand=''
    operation=''
    return Math.round(result * 1000)/1000
}

function sub(a,b){
    
    result = parseFloat(a)-parseFloat(b);
    first_operand=result
    second_operand=''
    operation=''
    return Math.round(result * 1000)/1000
}

function multiply(a,b){
    result = (parseFloat(a))*(parseFloat(b));
    first_operand=result
    second_operand=''
    operation=''
    return Math.round(result * 1000)/1000
}

function div(a,b){
    if (b==='0'){
        result ='nah';
        first_operand=''
        second_operand=''
        operation=''
        return result
    }
    else{
        result = parseFloat(a)/parseFloat(b);
        first_operand=result
        second_operand=''
        operation=''
        return Math.round(result * 1000)/1000
    }
}

// Operate
function operate(){
    if (first_operand && second_operand && operation){
        switch(operation){
            case '+':
                display.textContent=add(first_operand,second_operand);
                break;
            case '-':
                display.textContent=sub(first_operand,second_operand);
                break;
            case 'x':
                display.textContent=multiply(first_operand,second_operand)
                break;
            case '/':
                display.textContent=div(first_operand,second_operand);
                break
        }
    }
    else{
        return;
    }
}


// Function for inputting numbers

function inputDigit(){
    if (display.textContent === '0'){
        display.textContent='';
    }
    if (display.textContent.length>=9){
        return;
    }
    else{ 
        if (operation === ''){
            first_operand+=this.textContent
            display.textContent=first_operand
        }
        else{
            second_operand+=this.textContent
            display.textContent=second_operand
        }
        
    }
}

// Function to  clear the screen

function clear(){
    display.textContent='0';
    first_operand=''
    second_operand=''
    operation=''
    result=''
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

// Function for period

function dotFn(){
    if (operation === ''){
        first_operand+=this.textContent
        display.textContent=first_operand
    }
    else{
        second_operand+=this.textContent
        display.textContent=second_operand
    }
}


// Event Listeners

delchar.addEventListener('click',delCharFn)

allClear.addEventListener('click',clear)

for (let digit of allDigits){
    digit.addEventListener('click',inputDigit);
}

dot.addEventListener('click',dotFn)

for (let operator of operators){
    operator.addEventListener('click',function (){
        if (first_operand === ''){
            return;
        }
        else if (second_operand === ''){ 
            display.textContent=first_operand;
            operation=this.textContent;
        }
        else{
            operate();
            operation=this.textContent;
        }
    })
}

equal.addEventListener('click',operate)