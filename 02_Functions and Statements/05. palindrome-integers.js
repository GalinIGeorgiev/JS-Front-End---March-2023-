function palindromeIntegers(numbers){
        
       numbers.forEach(num => {
            console.log(isPalindrome(num))
       });
    
 
    function isPalindrome(number){
        let reversed= Number ([...number.toString()].reverse().join(''));
        return reversed===number;
    }
}


palindromeIntegers([123,323,421,121]);