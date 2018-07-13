class Sushi {
    constructor() {
        this.__count = 0; 
        return {count: 42};
    }

    get count() {
        return `I have ${this.__count} sushi and roles`;
    }

    set count(value) {
        this.__count = value > 10 ? 10: value;
    }
}

const california = new Sushi();
console.log(california)
california.count = 12;
console.log(california.count)