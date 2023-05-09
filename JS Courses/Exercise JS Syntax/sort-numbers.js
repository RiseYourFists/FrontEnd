function sort(arr){
    arr.sort(function(a, b){return a-b});
    let result = [];
    if(arr.length % 2 === 0){
        for (let i = 0; i < arr.length / 2; i++) {
            result.push(arr[i]);
            result.push(arr[arr.length - i - 1]);
        }
    }
    else{
        for (let i = 0; i < (arr.length - 1)/ 2; i++) {
            result.push(arr[i]);
            result.push(arr[arr.length - i - 1]);
        }
        result.push(arr[(arr.length -1)/2])
    }
    return result;
}

console.log(sort([1, 65, 3, 52, 48, 63, 31, -3, 18]))