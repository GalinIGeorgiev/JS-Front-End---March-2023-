function stringSubstring(word,text){
    let textArr = text.split(' ');
    const lowerCaseWords = textArr.map(element=> element.toLowerCase());
    if(lowerCaseWords.includes(word.toLowerCase())){
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}


stringSubstring(
    'javascript',
'JavaScript is the best programming language'

)