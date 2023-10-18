function storeProvision(stock, order){

    let allProducts=[...stock, ...order];

    let store = {};
    
    

     for (let index = 0; index < allProducts.length; index+=2) {
        
        let productName= allProducts[index];
        let productCount= Number(allProducts[index+1]);
        if(!store[productName]){

            store[productName]=0;
        }
      store[productName]+=productCount;
    
     }

     for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
     }
     
}



storeProvision(
        [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
        
)


storeProvision(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
        ],
        [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
        ]
        
)