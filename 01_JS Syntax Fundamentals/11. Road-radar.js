function roadRadar(speed, area){

    let typeOfSpeeding='';
    let speedDiff=0;
    switch (area) {
        case 'residential':
                
                if(speed<=20){
                    console.log(`Driving ${speed} km/h in a 20 zone`)
                }
                else{
                    speedDiff=speed-20
                    if(speedDiff<=20){
                        typeOfSpeeding="speeding"
                    }
                    else if(speedDiff>20 && speedDiff<=40){
                        typeOfSpeeding="excessive speeding"
                    }
                    else {
                        typeOfSpeeding="reckless driving"
                    }
                    console.log(`The speed is ${speed-20} km/h faster than the allowed speed of 20 - ${typeOfSpeeding}`)
                }
            break;

        case 'city':
            if(speed<=50 ){
                console.log(`Driving ${speed} km/h in a 50 zone`)
            }
            else{
                speedDiff=speed-50;
                if(speedDiff<=20){
                    typeOfSpeeding="speeding"
                }
                else if(speedDiff>20 && speedDiff<=40){
                    typeOfSpeeding="excessive speeding"
                }
                else {
                    typeOfSpeeding="reckless driving"
                }
                console.log(`The speed is ${speed-50} km/h faster than the allowed speed of 50 - ${typeOfSpeeding}`)
            }
            break;

        case 'interstate':
            if(speed<=90 ){
                console.log(`Driving ${speed} km/h in a 90 zone`)
            }
            else{
                speedDiff=speed-90;
                if(speedDiff<=20){
                    typeOfSpeeding="speeding"
                }
                else if(speedDiff>20 && speedDiff<=40){
                    typeOfSpeeding="excessive speeding"
                }
                else {
                    typeOfSpeeding="reckless driving"
                }
                console.log(`The speed is ${speed-90} km/h faster than the allowed speed of 90 - ${typeOfSpeeding}`)
            }
            break;

        case 'motorway':
            if(speed<=130 ){
                console.log(`Driving ${speed} km/h in a 130 zone`)
            }
            else{
                speedDiff=speed-130;
                if(speedDiff<=20){
                    typeOfSpeeding="speeding"
                }
                else if(speedDiff>20 && speedDiff<=40){
                    typeOfSpeeding="excessive speeding"
                }
                else {
                    typeOfSpeeding="reckless driving"
                }
                console.log(`The speed is ${speed-130} km/h faster than the allowed speed of 130 - ${typeOfSpeeding}`)
            }
        break;

    
        default:
            break;
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(200, 'motorway');