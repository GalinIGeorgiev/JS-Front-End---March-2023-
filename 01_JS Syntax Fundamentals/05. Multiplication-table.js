function multiplicationTable(number){
    for (let index = 1; index <= 10; index++) {
        console.log(`${number} X ${index} = ${number*index}`.trim())
        
    }
}


multiplicationTable(5)