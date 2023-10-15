function checkPerfectNum(number){
    let sumNum=0;
    let halfNumber= Math.floor(number/2);
    for (let index = 1; index <= halfNumber; index++) {
        if(number%index===0){
            sumNum+=index;
        }
        
    }
    if(sumNum===number){
        console.log("We have a perfect number!")
    }
    else{
        console.log("It's not so perfect.")
    }
}




checkPerfectNum(6);
checkPerfectNum(28);
checkPerfectNum(1236498);