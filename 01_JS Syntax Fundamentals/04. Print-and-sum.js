function printAndSum(start, end){
    let output= "";
    let sum= 0;
    for (let index = start; index <= end; index++) {
        output+=index+' ';
        sum+=index;
    }
    console.log(output.trim())
    console.log('Sum: '+sum)
}



printAndSum(5,10)