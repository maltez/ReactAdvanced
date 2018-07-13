const arr = [10,20,30,40,50,60,70,80,90,110]

// for(let k of arr) {
//     console.log(k);
// }

const obj = {
    0: 'hello',
    1: 'how are you',
    2: 'bye',
    'hello': 'some value',
    [Symbol('secret')]: 'secret'
}

class Iterator {
    constructor(items){
        this.items = items;
        this.counter = 0;
    }

    [Symbol.iterator](){
        return {
            next: () => {
                if( this.counter + 1 > this.items.length) {
                    return { value: undefined, done: true };
                } else {
                    const res =  {value: this.items[this.counter], done: false}; 
                    this.counter += 1;
                    return res;
                }
            }
        }
    }
}

const iterator = new Iterator(arr);

function * gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 100500;
}

for(let l of gen()) {
    console.log(l)
}

