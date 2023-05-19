function trackWords(params){

    class Word{
        constructor(word){
            this.name = word;
            this.occurrences = 0;
        }

        foundWord(){
            this.occurrences++;
        }

        printResults(){
            console.log(`${this.name} - ${this.occurrences}`)
        }
    }

    let[targetWords, ...listOfWords] = params;
    let targets = targetWords.split(' ');
    let words = [];

    targets.forEach(wordParam => {
       let word = new Word(wordParam);
       words.push(word);
    });

    words.forEach(word => {
       listOfWords.forEach(element => {
            if(word.name === element){
                word.foundWord();
            }
       }); 
    });

    words.sort((a,b)=> 
        {return b.occurrences - a.occurrences})
    .forEach(element =>{
        element.printResults();
    })
}

trackWords([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])