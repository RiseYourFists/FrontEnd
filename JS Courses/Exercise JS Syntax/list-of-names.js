function listOfNames(arr){
    if(arr.length === 0){
        return;
    }

    arr.sort();
    for(let i = 0; i < arr.length; i++){
        console.log(`${i + 1}.${arr[i]}`)
    }
} 

listOfNames(["John", "Bob", "Christina", "Ema"]);
// listOfNames([]);