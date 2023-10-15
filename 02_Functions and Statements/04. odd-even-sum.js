function oddEvenSum(numbers){
    let evenSum=0;
    let oddSum=0;
    
    const myArray= numbers.toString().split('').map(Number);

    for (let index = 0; index < myArray.length; index++) {
        
        if(myArray[index]%2===0){
            evenSum += myArray[index];
        }
        else{
            oddSum += myArray[index];
        }
    }
   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
   

    
}

oddEvenSum(3495892137259234)