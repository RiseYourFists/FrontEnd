function parking(params){
    let parking = {};

    params.forEach(line => {
        let[state, carRegistration] = line.split(', ')

        parking[carRegistration] = state;
    });

    for (const key in parking) {
        if(parking[key] === 'OUT'){
            delete parking[key];
        }
    }

    let keys = Object.keys(parking).sort((a,b)=> {return a.localeCompare(b)});
    if(keys.length === 0){
        console.log('Parking Lot is Empty');
        return;
    }

    keys.forEach(key => {
        console.log(key)
    });
}

parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])