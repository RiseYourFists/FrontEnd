function sameNumbers(input){
    let text = input.toString();
    let numToCheck = text[0];
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        sum += Number.parseInt(text[i]);
        if(text[i] != numToCheck){
            isSame = false;
        } 
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);