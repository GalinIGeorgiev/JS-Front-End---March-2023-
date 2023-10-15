function listOfNames(names){
    let sortedList = [...names].sort((nameA,nameB) => {
        let result =nameA.localeCompare(nameB);
        return result;
    })
    let counter=0;
   for (const name of sortedList) {
    counter++;
     console.log(`${counter}.${name}`)
   }
}


listOfNames(
    ["John", 
    "Bob", 
    "Christina", 
    "Ema"]
)