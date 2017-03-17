// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

console.log('Testing Instance of Truck');
var myTruck = new Truck('Acura', 'Integra', 1999, 'Red', 4, 3);
assert.strictEqual(myTruck instanceof Truck, true, 'myTruck is an instance of Truck');
success();

console.log('Testing Instance of Car');
var myTruck = new Truck('Acura', 'Integra', 1999, 'Red', 4, 3);
assert.strictEqual(myTruck instanceof Car, true, 'myTruck is an instance of Car');
success();

console.log('Testing Constructor');
var myTruck = new Truck('Acura', 'Integra', 1999, 'Red', 4, 3);
assert.strictEqual(myTruck.make, 'Acura', 'make is a contructor of myTruck');
assert.strictEqual(myTruck.model, 'Integra', 'model is a constructor of myTruck');
assert.strictEqual(myTruck.year, 1999, 'year is a constructor of myTruck');
assert.strictEqual(myTruck.color, 'Red', 'color is a constructor of myTruck');
assert.strictEqual(myTruck.seats, 4, 'seats is a constructor of myTruck');
assert.strictEqual(myTruck.passengers, 3, 'passengers is a constructor of myTruck');
success();

console.log('Testing Default Seat Count');
var myTruck = new Truck('Acura', 'Integra', 1999, 'Red', 4, 3);
assert.strictEqual(myTruck.seats, 3, 'sears are defaulted to 3');
success();
