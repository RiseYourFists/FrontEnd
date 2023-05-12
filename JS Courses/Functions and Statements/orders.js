function order(item, count){
    let itemList = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    }

    let cost = itemList[item] * count;
    console.log(cost.toFixed(2))
}