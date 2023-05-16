function printObjProperties(obj){
    let keys = Object.keys(obj);
    keys.forEach(key => {
        console.log(`${key} -> ${obj[key]}`)
    });
}

printObjProperties({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})