function reveal(replacers, text){
    let words = replacers.split(', ');
    words.sort((a, b) => {a.length-b.length})
    words.reverse()
    wordIndex = 0;
    let lenCounter = 0
    while(text.includes('*')){

        for (let i = text.indexOf('*'); i < text.length; i++) {
            if(text[i] === '*'){
                lenCounter++;
                
               if(words[wordIndex].length === lenCounter){
                    text = text.replace('*'.repeat(lenCounter), words[wordIndex])
                    lenCounter = 0;
                    wordIndex++;
               }
               
            }
            else{
                lenCounter = 0;
            }
        }

        if(wordIndex + 1 > words.length){
            break;
        }
    }
    console.log(text);
}

reveal('great','softuni is ***** place for learning new programming languages');
reveal('great, learning','softuni is ***** place for ******** new programming languages');