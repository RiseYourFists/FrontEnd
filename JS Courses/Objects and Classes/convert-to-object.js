function convertToObject(jsonString){
    let person = JSON.parse(jsonString);

    let keys = Object.keys(person);
    keys.forEach(key => {
        console.log(`${key}: ${person[key]}`)
    });
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')