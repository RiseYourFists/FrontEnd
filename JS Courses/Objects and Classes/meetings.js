function scheduleMeetings(listOfMeetings){
    let schedule = {};

    listOfMeetings.forEach(event => {
        let[dayOfWeek, person]= event.split(' ')
        let keys = Object.keys(schedule)
        if(keys.includes(dayOfWeek)){
            console.log(`Conflict on ${dayOfWeek}!`)
            return;
        }
        schedule[dayOfWeek]= person;
        console.log(`Scheduled for ${dayOfWeek}`)
    });

    let keys = Object.keys(schedule);

    keys.forEach(key => {
        console.log(`${key} -> ${schedule[key]}`)
    });
}

scheduleMeetings(['Monday Peter',
                  'Wednesday Bill',
                  'Monday Tim',
                  'Friday Tim'])