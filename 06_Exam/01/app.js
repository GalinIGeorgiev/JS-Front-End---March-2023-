function horseRacing(input){

        let horses=input.shift().split('|');
        

         let commandParser={
             'Retake':  retakeHandler,
             'Rage':    rageHandler,
             'Trouble': troubleHandler,  
             'Miracle': miracleHandler,  
         }


        while(input[0]!=='Finish'){
            

            let commandArgs = input.shift().split(' ');
            let command=commandArgs.shift();

            commandParser[command](commandArgs);
        }

        console.log(horses.join('->'));
        console.log(`The winner is: ${horses[horses.length-1]}`);

     function  retakeHandler(commandArgs){
            
            let overtakingHorse=horses.indexOf(commandArgs[0]);
            let overtakenHorse=horses.indexOf(commandArgs[1]);
            if(overtakingHorse<=overtakenHorse){
                horses[overtakingHorse]= commandArgs[1];
                horses[overtakenHorse]= commandArgs[0];

                console.log(`${commandArgs[0]} retakes ${commandArgs[1]}.`);
            }
            
      } 

     function  rageHandler(commandArgs){

        let indexRageHorse=horses.indexOf(commandArgs[0]);

        if((horses.length-1)!==indexRageHorse){
            let ragingHorse=horses[indexRageHorse];
            let infrontHorse=horses[indexRageHorse+1];
            
            horses[indexRageHorse+1]=ragingHorse;
            horses[indexRageHorse]=infrontHorse;

            indexRageHorse=horses.indexOf(commandArgs[0]);
            if((horses.length-1)!==indexRageHorse){
                let ragingHorse=horses[indexRageHorse];
                let infrontHorse=horses[indexRageHorse+1];
                
                horses[indexRageHorse+1]=ragingHorse;
                horses[indexRageHorse]=infrontHorse;
            }
           
        }
         console.log(`${commandArgs[0]} rages 2 positions ahead.`);
      } 

     function  troubleHandler(commandArgs){

        let currentHorseIndex=horses.indexOf(commandArgs[0]);
        if(currentHorseIndex!==0){
            let horseTrouble=horses[currentHorseIndex];
            let horseBehind=horses[currentHorseIndex-1];
            horses[currentHorseIndex]=horseBehind;
            horses[currentHorseIndex-1]=horseTrouble;

            console.log(`Trouble for ${commandArgs[0]} - drops one position.`);
        }
      } 

     function  miracleHandler(){
        if(horses.length>1){
            let horseMiracle=horses.shift();
            

            horses.push(horseMiracle);
            console.log(`What a miracle - ${horses[horses.length-1]} becomes first.`);
        }
            
            
      } 

}


// horseRacing(['Bella|Alexia|Sugar',
// 'Retake Alexia Sugar',
// 'Rage Bella',
// 'Trouble Bella',
// 'Finish'])



horseRacing(['Fancy|Lilly',

'Finish',
'Rage Lilly'])


