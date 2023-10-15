function sumDigits(number){
    let sum=0;
    let numberAsString = number.toString();
    
    for (const digidString of numberAsString) {
        let digid =  Number(digidString);
        sum+=digid;
    }
    
    
        
    
    
    console.log(sum);
}


sumDigits(97561)