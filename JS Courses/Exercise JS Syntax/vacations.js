function evaluatePricing(count, groupType, dayOfTHeWeek){
    let pricingList = [
        [8.45, 9.80, 10.46],    //Students
        [10.90, 15.60, 16.00],  //Business
        [15.00, 20.00, 22.50]   //Regular
    ];
    
    let studentsDisc = false;
    let businessDisc = false;
    let regularDisc = false;

    let groupIndex;
    let dayIndex;

    if(groupType === 'Students'){
        groupIndex = 0;
        if(count >= 30){
            studentsDisc = true;
        }
    }
    else if(groupType === 'Business'){
        groupIndex = 1;
        if(count >= 100){
            businessDisc = true;
        }
    }
    else if(groupType === 'Regular'){
        groupIndex = 2;
        if(count >= 10 && count <= 20){
            regularDisc = true;
        }
    }

    if(dayOfTHeWeek === 'Friday'){
        dayIndex = 0;
    }
    else if(dayOfTHeWeek === 'Saturday'){
        dayIndex = 1;
    }
    else if(dayOfTHeWeek === 'Sunday'){
        dayIndex = 2;
    }

    let pricing = pricingList[groupIndex][dayIndex];
    
    if(studentsDisc){
        pricing *= 0.85;
    }

    if(businessDisc){
        count -= 10;
    }

    if(regularDisc){
        pricing *= 0.95;
    }

    pricing *= count;

    console.log(`Total price: ${pricing.toFixed(2)}`)
}

evaluatePricing(30,"Students", "Sunday");
evaluatePricing(40, "Regular", "Saturday")