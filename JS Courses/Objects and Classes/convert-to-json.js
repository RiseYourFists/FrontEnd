function convertToJson(firstName, lastName, hairColor){
    let obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let convertedToJson = JSON.stringify(obj);
    console.log(convertedToJson);
}

convertToJson('George', 'Jones', 'Brown')