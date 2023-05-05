function arrReverse(numOfElements ,arr){
   let result = arr.slice(0, numOfElements);
   result.reverse();
   console.log(`${result.join(' ')}`)
}

arrReverse(3, [10, 20, 30, 40, 50])
arrReverse(4, [-1, 20, 99, 5])
arrReverse(2, [66, 43, 75, 89, 47])