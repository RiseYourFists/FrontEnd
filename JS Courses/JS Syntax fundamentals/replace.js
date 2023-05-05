function censor(sentence, target){
    let len = target.length;
    let replacer = '*'.repeat(len);
    
    while(sentence.includes(target)){
        sentence = sentence.replace(target, replacer);
    }
    console.log(sentence);
}

censor('A small sentence with some words', 'small');
censor('Find the hidden word', 'hidden');