function* gen() {
    let userInfo = yield(5);
    console.log(yield (userInfo()));
}

const g = gen();
console.log(g.next());
setTimeout(()=> {
    const data = function() {
        setTimeout(() => {
            g.next('Fetched data');
        }, 100);
    };
    g.next(data)
}, 300);

console.log(g.next(12));