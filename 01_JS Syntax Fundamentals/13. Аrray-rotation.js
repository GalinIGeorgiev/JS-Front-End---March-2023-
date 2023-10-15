function arrayRotation(numbers , rotations){
     rotations %= numbers.length;

     for (let index = 0; index < rotations; index++) {
        let element = numbers[0];
        numbers.shift();
        numbers.push(element);
        
     }
     console.log(numbers.join(' '));
}



arrayRotation([51, 47, 32, 61, 21], 2)