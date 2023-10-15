function pascalCaseSplitter(text){
    let textArr= text.split('');
    let word="";
    let wordsToPrint= new Array;

    for (let index = 0; index < textArr.length; index++) {
        if(textArr[index]=== textArr[index].toUpperCase() && index!==0){
            
            wordsToPrint.push(word);
            word="";
            word= word.concat(textArr[index]);
        }
        else{
            word= word.concat(textArr[index]);
        }
        
        
    }
    wordsToPrint.push(word);
    console.log(wordsToPrint.join(', '));
}


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');