function piccolo(input){

    let commandTokens=input;

    let cars=[];

    for (let index = 0; index < commandTokens.length; index++) {
        let command = commandTokens[index].split(', ');
        if(command[0].toLowerCase()==='in'&& !cars.includes(command[1])){
            cars.push(command[1]);
        }
        else if(command[0].toLowerCase()==='out'){
             let indexOut= cars.indexOf(command[1]);
            if(indexOut!== -1){
                cars.splice(indexOut,1);
            }
            
        }       
    }

    if(cars.length===0){
        console.log('Parking Lot is Empty');
    }
    else{
        cars.sort(function(a,b){
           var aNumber= a;
           var bNumber= b;
           if(aNumber<bNumber){
            return-1;
           }
           if(aNumber>bNumber){
            return 1;
           }
           return 0;       
        });
        
        console.log(cars.join(' \n'));
    }
    
}


piccolo(
    ['IN, CA2844AA',
'IN, CA1234TA',
'IN, CA1234TA',
'IN, CA1234TA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)

piccolo(
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

)



