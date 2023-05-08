function solve(fruitType, weightInGrams, cost){
    let kilos = weightInGrams / 1000;
    let price = kilos * cost;
    console.log(`I need $${price.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruitType}.`)
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);