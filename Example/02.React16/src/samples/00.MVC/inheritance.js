var Car = function(kind, fuel) {
    this.kind = kind;
    this.fuel = fuel;
}

Car.prototype = Object.create({});
Car.prototype.move = function() {
    console.log('Trrrrrrr');
    this.fuel =- 1;
}
Car.prototype.constructor = Car;

var FordVehicle = function(fuel) {
    Car.call(this, 'Ford', fuel);
}

FordVehicle.prototype = Object.create(Car.prototype);
FordVehicle.prototype.stop = function() {
    console.log('Stop');
}

FordVehicle.prototype.constructor = FordVehicle;


var carFerarry = new Car('ferarry', 100);
var ford = new FordVehicle(50);

console.log(carFerarry);
console.log(ford);


var zz = {a:12}

function DoSmth(arg){
    arg = {};
    arg.zz = 156;
}

DoSmth(zz);
console.log(zz.a);
