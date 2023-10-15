function matrixFactory(number){
    let output="";
    for (let index = 0; index < number; index++) {
        

        for (let index = 0; index < number; index++) {
            output= output.concat(number.toString()," ");
            
        }
        output+= "\n";
    }
    console.log(output);
}


matrixFactory(7);