function listOfNumbers(numbers){
    let sortedList = [...numbers].sort((numberA,numberB) => {
        let result = numberA-numberB;
        return result;
    })
    let newArray=[];

    for (let index = 0; index < numbers.length; index++) {
        if(index%2===0){
            newArray[index] = sortedList.shift();
        }
        else{
            newArray[index] = sortedList.pop();
        }
        
    }
    return newArray;


   
}


listOfNumbers(
    [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
)