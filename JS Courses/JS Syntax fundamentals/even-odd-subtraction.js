function evenToOddSubtraction(arr){
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(element => {
        if(element % 2 === 0){
            evenSum+= element;
        }
        else{
            oddSum+=element
        }
    });

    console.log(evenSum - oddSum)
}

evenToOddSubtraction([1,2,3,4,5,6])
evenToOddSubtraction([3,5,7,9])
evenToOddSubtraction([2,4,6,8,10])