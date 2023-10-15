function loadingBar(number){

    numberOfSigns= number/10;
    numberOfDots= 10-numberOfSigns;
    let output="";

    if(number===100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
    else{

        output= `${number}% [${"%".repeat(numberOfSigns)}${".".repeat(numberOfDots)}]`;
        console.log(output);
        console.log("Still loading...");
    }
}



loadingBar(30);
loadingBar(50);
loadingBar(100);
