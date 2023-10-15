function cookingByNumbers(...commands){
    let number= parseInt(commands[0]);
    for (let index = 1; index <= commands.length; index++) {
        let command = commands[index];
        
        switch (command) {
            case 'chop' :
                number= number/2;
                console.log(number);
                break;

            case 'dice' :
                number=Math.sqrt(number)
                console.log(number);
                break;

            case 'spice' :
                number+=1;
                console.log(number);
            break; 

            case 'bake' :
                number=number*3;
                console.log(number);
            break;   

            case 'fillet':
                number=number*0.8;
                console.log(number);
            break; 

            default:
                break;
        }
    
        
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

