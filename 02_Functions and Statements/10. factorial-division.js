function factorialDivision(numberA, numberB){

    function getFactorial(number){
        if(number===1){
            return number;
        }
        return number *  getFactorial(number-1);
    }
    let firstNumber = getFactorial(numberA);
    let secondNumber = getFactorial(numberB);

    let result= firstNumber/secondNumber;
    
    console.log(result.toFixed(2));
}

factorialDivision(
    5,
2

);
factorialDivision(
    6,
2

);