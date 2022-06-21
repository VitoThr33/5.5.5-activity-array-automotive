//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule{
    constructor(make,model,year,color,mileage){
        super(make,model,year,color,milage)
        this.maximumPassengers=5;
        this.passenger= 0;
        this.numberOfWheels=4;
        this.fuel=10;
        this.scheduleService=false; 
    }
}

loadPassenger(num) {
    if (this.passenger < this.maximumPassengers) {
        if ((num + this.passenger) <= this.maximumPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " not enough space for all passengers");

        }
    } else {
        console.log(this.model + " " + this.make + " all seats full");
    }
}

start() {
    if (this.fuel > 0) {            
        console.log("Started.");
        return this.started = true
    } else {
        console.log("Fuel needed");
        return this.started = false;
    }
}

checkService() {
    if (this.mileage > 30000) {            
        console.log("Service Vehicle")
        this.scheduleService = true
        return this.scheduleService;                       
    }
}