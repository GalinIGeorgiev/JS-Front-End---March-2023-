function wordsTracker(input){
    let wordsToTrack=input[0].split(' ');
    let text= input.slice(1);
    let wordCount=[];
    for (let index = 0; index < wordsToTrack.length; index++) {
        
        let count=  text.filter(w=> w.toLowerCase()===wordsToTrack[index].toLowerCase()).length;
        
            wordCount.push({word:wordsToTrack[index],count:count})
        
    }

    wordCount.sort((a,b)=> b.count - a.count)

    for (const word of wordCount) {
        console.log(`${word.word} - ${word.count}`)
    }

  
}



wordsTracker([
    'this sentence hhh', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )

    wordsTracker(
        [
            'is the', 
            'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
            
    )
