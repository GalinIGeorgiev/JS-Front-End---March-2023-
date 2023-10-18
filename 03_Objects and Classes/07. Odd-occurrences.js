function oddOccurrences(input){

    let text= input.split(' ');
    let wordsToPrint=[];

    for (let index = 0; index < text.length; index++) {
        
        let count = text.filter(w=> w.toLowerCase()===text[index].toLowerCase()).length;
        if(count%2===1 && !wordsToPrint.includes(text[index].toLowerCase())){
            
            wordsToPrint.push(text[index].toLowerCase());
        }
    }

    
        console.log(wordsToPrint.join(' '));
    
}



oddOccurrences(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)