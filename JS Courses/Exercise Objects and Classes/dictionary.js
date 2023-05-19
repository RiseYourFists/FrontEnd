function dictionary(params){
    let dictionary = {};
    params.forEach(line => {
        let dictionaryInfo = JSON.parse(line);
        let key = Object.keys(dictionaryInfo)[0];
        dictionary[key] = dictionaryInfo;
    });

    let keys = Object.keys(dictionary)
        .sort((a,b)=> 
            {return a.localeCompare(b)});

    keys.forEach(key => {
        let desc = dictionary[key];
        console.log(`Term: ${key} => Definition: ${desc[key]}`);
    });
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])