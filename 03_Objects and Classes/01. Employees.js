function employeesRegister(input){
    let employees= {};
    
    for (const key of input) {
       employees[key]= key.length;
    }

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    }
}   

employeesRegister(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
        ]
)



