class User {
    constructor(name, secondName, age, gender) {
        this.name = name;
        this.secondName = secondName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return `${this.name} + ${this.secondName}`;
    }
}