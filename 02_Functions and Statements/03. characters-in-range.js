function charInRange(charA, charB){

    const getAsciiCode = (char) => char.charCodeAt(0);

    let firstAsciiCode= getAsciiCode(charA);
    let secondAsciiCode= getAsciiCode(charB);

    let firstChar = Math.min(firstAsciiCode,secondAsciiCode);
    let secondChar = Math.max(firstAsciiCode,secondAsciiCode);
    
    let  allChars=[];

    for (let index = firstChar+1; index < secondChar; index++) {

        allChars.push(String.fromCharCode(index))
        
        
    }
    console.log(allChars.join(' '))
}


charInRange('c','#');
// charInRange('a','d');
// charInRange('#',
// ':'
// );