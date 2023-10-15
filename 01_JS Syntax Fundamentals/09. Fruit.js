function fruitPrice(fruit,grams,priceKg){
    let kilograms= (Math.round((grams/1000) * 100) / 100).toFixed(2);
    let money= (Math.round((kilograms*priceKg) * 100) / 100).toFixed(2); 



    console.log(`I need $${money} to buy ${kilograms} kilograms ${fruit}.`.trim());
}

