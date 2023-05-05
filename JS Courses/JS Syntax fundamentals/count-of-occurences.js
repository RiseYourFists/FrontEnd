function occurrences(text, target){
    let words = text.split(' ');
    let counter = 0;
    words.forEach(element => {
        if(element === target){
            counter++;
        }
    });
    console.log(counter);
}

occurrences('This is a word and it also is a sentence','is');
occurrences('softuni is great place for learning new programming languages','softuni');