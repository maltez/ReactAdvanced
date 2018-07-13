fn();
function fn () {

}

// Error  fn1()
var fn1 = function() {
   this.a = 12;
   return () => {
        console.log(`This is ${this.a}`);
   }
}

const z = fn1();
z.call(this);

const a = {
    zz: 12,
    fn: () => {
        console.log(this.a);
    }
}

a.fn()