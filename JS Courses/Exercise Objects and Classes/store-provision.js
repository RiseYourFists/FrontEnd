function restock(currentStock, deliveredStock){
    let combined = [...currentStock, ...deliveredStock];
    let restock = {};
    for(let i = 0; i < combined.length; i++){
        if(i % 2 === 0){
            let name = combined[i];
            if(!restock.hasOwnProperty(name)){
                restock[name] = 0;
                continue;
            }

        }
        else{
            let key = combined[i - 1];
            let quantity = Number(combined[i]);

            restock[key] += quantity;
        }
    }

    for (const key in restock) {
        console.log(`${key} -> ${restock[key]}`)
    }
}

restock([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])