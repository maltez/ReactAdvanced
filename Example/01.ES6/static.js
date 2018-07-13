class Food {
    static kind (){
        return 'Japanese';
    }

    eat() {
        this.name = 'I eat this food';
    }
}

console.log(Food.kind());
console.log((new Food()).eat())
