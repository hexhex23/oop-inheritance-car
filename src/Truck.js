var Car = require('./Car.js');

// Implement your Truck here
//Your `Truck` constructor should meet the following requirements. There should be at least one test for each bullet point below.
/*
* Must be an instance of `Truck`
* Must be an instance of `Car`.
* Must have the following constructor parameters:
  * make
  * model
  * year
  * color
  * passengers
* Must default to 3 seats.*/
function Truck(make, model, year, color, seats, passengers) {
Car.call(this, make, model, year, color, seats, passengers)

this.seats = 3
}

Truck.prototype = Object.create(Car.prototype)
Truck.prototype.contructor = Truck

var myTruck = new Truck()
console.log(myTruck instanceof Truck)
console.log(myTruck instanceof Car)


module.exports = Truck;
