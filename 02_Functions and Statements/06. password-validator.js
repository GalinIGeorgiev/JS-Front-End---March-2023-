function isPasswordValid(inputPassword){
    let isValid=true;
    let pattern= /^[a-zA-Z0-9]+$/; 
    let patternForDigids=/^(?=(?:\D*\d){2})/



if (!(inputPassword.length>=6 && inputPassword.length<=10)) {
    isValid=false;
    console.log("Password must be between 6 and 10 characters");
}

if (!pattern.test(inputPassword)) {
    isValid=false;
    console.log("Password must consist only of letters and digits");
}

if (!patternForDigids.test(inputPassword)) {
    isValid=false;
    console.log("Password must have at least 2 digits");
}

if (isValid) {
    console.log("Password is valid");
}
}


isPasswordValid("lo2-gIn2");
isPasswordValid("logI_n22");
isPasswordValid("11111111");
