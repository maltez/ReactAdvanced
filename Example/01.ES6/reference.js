var zz = {a: 1, b: 12}
myFn(zz);
console.log(zz);

function myFn (obj) {
    obj = {};
    obj.a = 12;
    obj.b =153;
}

const a = {
    1: 123,
}

const a1 = Symbol('test1');
const a2 = Symbol('test2');

console.log(a1.toPrimitive)
console.log(a2)