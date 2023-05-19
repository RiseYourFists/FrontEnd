function oddOccurrences(text){
    text = text.toLowerCase();
    let words = text.split(' ');
    let occurrences = {};

    words.forEach(word => {
        if(!occurrences.hasOwnProperty(word + ' ')){
            occurrences[word + ' '] = 1;
            return;
        }
        occurrences[word + ' ']++;
    });
    
    let keys = Object.keys(occurrences);
    let result = [];

    keys.forEach(key => {
        if(occurrences[key] % 2 === 1){
            result.push(key);
        }
    });
    console.log(result.join(''));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');