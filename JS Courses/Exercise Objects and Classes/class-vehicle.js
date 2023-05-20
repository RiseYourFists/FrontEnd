class Vehicle{
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = Object(parts);
        this.parts.quality = this.parts.engine * this.parts.power;
        this.fuel = Number(fuel);
    }

    drive(fuelLoss){
        if(fuelLoss > this.fuel){
            this.fuel = 0;
            return;
        }

        this.fuel -= fuelLoss;
    }
}

// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);