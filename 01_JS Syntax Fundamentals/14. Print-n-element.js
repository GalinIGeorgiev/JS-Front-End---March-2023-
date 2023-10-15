function printNElement(array , number){
    let newArray= [];
    for (let index = 0; index < array.length; index+=number) {
        const element = array[index];
        newArray.push(array[index]);
        
    }
    return newArray;
    
}

printNElement(
['5', 
'20', 
'31', 
'4', 
'20'], 
2
)