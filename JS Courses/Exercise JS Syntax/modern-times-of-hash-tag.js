function tagged(text){
    let temp = [];
    let result = [];
    let words = text.split(' ')
    words.forEach(element => {
        const match = /#[A-Za-z]+\b/.exec(element);
        if(match !== null){
            temp.push(match[0]);
        }
    });
    
    temp.forEach( element => {
        result.push(element.replace('#', ''));
    });

    result.forEach(element => {
        console.log(element);
    });
}

tagged('Nowadays everyone uses # to tag a #special word in #socialMedia');
tagged('The symbol # is known #variously in English-speaking #regions as the #number sign');