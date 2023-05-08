function yearLeap(year){
    let isLeap = false;

    if(year % 4 === 0){
        isLeap = true;
    }

    if(year % 100 === 0){
        isLeap = false;
    }

    if(year % 400 === 0){
        isLeap = true;
    }

    let result = (isLeap)? 'yes' : 'no';
    console.log(result);
}


yearLeap(1984)
yearLeap(2003)
yearLeap(4)
yearLeap(2000)