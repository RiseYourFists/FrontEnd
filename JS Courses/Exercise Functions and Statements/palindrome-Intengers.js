function isPalindrome(arr){
    arr.forEach(num => {
        let text = num.toString();
        let params = getMiddle(text);
        let hasTwoParams = params[0];
        
        let first = params[1];

        if(hasTwoParams){
            let second = params[2];

            console.log(checkEvenLen(first, second, text));
        }
        else{
            console.log(checkOddLen(first, text))
        }
    });

    function checkEvenLen(first, second, text){
        if(text[first] !== text[second]){
            return false;
        }

        for(let i = first - 1; i >= 0; i--){
            if(text[i] !== text[text.length - 1 - i]){
                return false;
            }
        }
        return true;
    }

    function checkOddLen(index, text){
        if(text.length === 1){
            return true;
        }

        for(let i = index - 1; i >= 0; i--){
            if(text[i] !== text[text.length - 1 - i]){
                return false;
            }
        }

        return true;
    }

    function getMiddle(text){
        if(text.length % 2 === 0){
            let first = text.length / 2 - 1;
            let second = text.length / 2
            return[true, first , second]
        }
        else{
            let first = (text.length - 1) / 2
            return[false, first]
        }
    }
}

isPalindrome([123,323,421,121]);
// console.log('*'.repeat(10))
// isPalindrome([22]);