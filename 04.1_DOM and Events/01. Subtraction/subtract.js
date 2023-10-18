function subtract() {
    
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    firstNumber.disabled=false;
    secondNumber.disabled=false;
   
    let result = document.getElementById('result');
    

    let firstInt=Number(firstNumber.value);
    let secondInt=Number(secondNumber.value);
   
    result.textContent=(firstInt-secondInt);
    
}