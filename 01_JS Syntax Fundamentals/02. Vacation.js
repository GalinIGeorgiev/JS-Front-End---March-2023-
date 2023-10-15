function vacationCalc(num,type,dayOfWeek){
    let vacationPrice=0;
    switch (type) {
        case 'Students':
            if(dayOfWeek==='Friday'){
                vacationPrice=num*8.45;
            }
            else if(dayOfWeek==='Saturday'){
                vacationPrice=num*9.8;
            }
            else if(dayOfWeek==='Sunday'){
                vacationPrice=num*10.46;
            }
        if (num>=30) {
           vacationPrice= vacationPrice*0.85;
        }
        console.log('Total price: ' + vacationPrice.toFixed(2))
        
            break;

        case 'Business':
            
        if (num>=100) {
            num= num-10;
        }
        
            if(dayOfWeek==='Friday'){
                vacationPrice=num*10.9;
            }
            else if(dayOfWeek==='Saturday'){
                vacationPrice=num*15.6;
            }
            else if(dayOfWeek==='Sunday'){
                vacationPrice=num*16;
            }
            console.log('Total price: ' + vacationPrice.toFixed(2))
            break;
            
        case 'Regular':
            
        
        
            if(dayOfWeek==='Friday'){
                vacationPrice=num*15;
            }
            else if(dayOfWeek==='Saturday'){
                vacationPrice=num*20;
            }
            else if(dayOfWeek==='Sunday'){
                vacationPrice=num*22.5;
            }
            if (num>=10 && num<=20) {
               vacationPrice= vacationPrice*0.95;
            }
            console.log('Total price: ' + vacationPrice.toFixed(2))
            break;

        default:
            break;

    }
    
    
    
}


vacationCalc
(30, 'Students', 'Sunday')

// vacationCalc
// (num,
// type,
// dayOfWeek)

// vacationCalc
// (num,
// type,
// dayOfWeek)