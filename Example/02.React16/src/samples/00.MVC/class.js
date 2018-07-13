class Car {
    constructor(kind, fuel) {
        this.kind = kind;
        this.fuel = fuel;
        this.style = {a: 12, z:'#aa00ff'};
    }

    render() {
        console.log(`Style ${this.style.z}`);
        console.log('Trrrrrrr');
        this.fuel =- 1;
    }
}

class FordVehicle extends Car {
    constructor(fuel) {
        super('Ford', fuel);
    }

    render() {
        this.style = {a: 42, z:'#zzyy00'}
        console.log('Render');
        super.render()
    }
}

const ferrary = new Car('Ferrary', 100);
const ford = new FordVehicle(50);
ferrary.render();
console.log('------------------------');
ford.render();