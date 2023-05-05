function cost(partOfWeek, age){
    let priceBoard =[
        [12,18,12],//weekday
        [15,20,15],//weekend
        [5,12,10]//holiday
    ]

    let weekIndex;
    let ageIndex;

    switch(partOfWeek){
        case 'Weekday': weekIndex = 0; break;
        case 'Weekend': weekIndex = 1; break;
        case 'Holiday': weekIndex = 2; break;
        default: console.log('Error!'); return;
    }

    if(age >= 0 && age <= 18){
        ageIndex = 0;
    }
    else if(age > 18 && age <= 64){
        ageIndex = 1;
    }
    else if(age > 64 && age <= 122){
        ageIndex = 2;
    }
    else{
        console.log('Error!'); 
        return;
    }

    console.log(`${priceBoard[weekIndex][ageIndex]}$`)
}

cost('Weekday',42);
cost('Holiday', -12);
cost('Holiday', 15);