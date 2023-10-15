function sameNumbers(numbers){
    let result =0;
    let isTheSame ="true";
    let preDigid=0;
    let currentDigid=0;
    let numbersAsString= numbers.toString()
    let firstTime= true;

    for (const digid of numbersAsString ) {

        currentDigid=Number(digid)

        result+=currentDigid ;

    if (firstTime) {
       preDigid= currentDigid;
      firstTime=false;
    }

        if(currentDigid!==preDigid){
            isTheSame="false";
        }
        preDigid= currentDigid;
    }
    console.log(isTheSame);
    console.log(result);
}

sameNumbers(1234)