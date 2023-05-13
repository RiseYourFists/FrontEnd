function pushBar(percentage){
    let barLevel = percentage / 10;
    let emptyBar = 10 - barLevel;

    if(emptyBar === 0){
        console.log(`${percentage}% Complete!\n[${'%'.repeat(barLevel)}]`)
    }
    else {
        console.log(`${percentage}% [${'%'.repeat(barLevel)}${'.'.repeat(emptyBar)}]\nStill loading...`) 
    }
}

pushBar(30)
pushBar(50)
pushBar(100)