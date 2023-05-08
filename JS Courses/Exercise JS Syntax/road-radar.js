function radar(speed, area){
    let speedLimits ={
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let msg;

    if(speed <= speedLimits[area]){
        msg =`Driving ${speed} km/h in a ${speedLimits[area]} zone`;
    }
    else{
        let speedDiff = speed - speedLimits[area];
        let status =(speedDiff <= 20 )
        ? 'speeding': (speedDiff <= 40)
        ? 'excessive speeding' : 'reckless driving';

        msg= `The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`
    }
    console.log(msg)
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');