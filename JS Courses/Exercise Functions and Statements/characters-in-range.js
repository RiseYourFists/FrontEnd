function printAll(first, second){
    let result = compare(first, second);
    let[start, end] = result;
    printInRange(start, end);
    
    function compare(first, second){
        if(first < second){
            return [first, second]
        }

        return [second, first];
    }

    function printInRange(start, end){

        let arr = [];
        for(let i = start.charCodeAt() + 1 ; i < end.charCodeAt(); i++){
            
            arr.push(String.fromCharCode(i));
        }
        console.log(arr.join(' '));
    }
}

printAll('C', '#')