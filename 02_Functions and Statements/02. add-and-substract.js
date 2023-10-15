function addAndSubstract(...numbers){
   const sum = (a,b ) => a+b;
   const substract = (mySum,number ) => mySum-number;


    console.log(substract(sum(numbers[0],numbers[1]),numbers[2]))
}


addAndSubstract(23,6,10);