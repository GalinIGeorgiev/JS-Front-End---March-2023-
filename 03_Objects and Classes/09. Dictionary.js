function dictionary(input){

    let arrObj= [];

    for (const line of input) {
        
        let jsonObj = JSON.parse(line);

        let obj = {term: Object.keys(jsonObj), definition: Object.values(jsonObj)};
        

        if(arrObj.find(o=> o.term[0]===obj.term[0])){
            arrObj.pop(o=> o.term[0]===obj.term[0]);
            arrObj.push(obj)
        }
        else{
            arrObj.push(obj)
            // let fff=(arrObj[obj.term[0]].definition);
            // let fffs=(obj.definition);
            // arrObj[obj.term[0]]=obj.definition[0];
        }
        

    }
    
    
    arrObj.sort((a,b) =>{
        let termA=a.term;
        let termB=b.term;
        if(termA>termB){
            return 1;
        }
        if(termA<termB){
            return -1;
        }
        else{
            return 0;
        }
        
    });
    
    for (var key of arrObj) {
        
        
        console.log(`Term: ${key.term} => Definition: ${key.definition}`);  
    }   
}

dictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Coffee":"A hodsdst drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Coffee":"A hodsdt drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
        ]
        
        
)