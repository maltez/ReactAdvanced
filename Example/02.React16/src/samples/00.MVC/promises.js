const delay = function(msg, sec) {
    return new Promise((res, rej)=> {
        if(sec > 4) {
            return rej(new Error('msg'));
        }

        setTimeout(() => {
            return res(msg);
        }, sec);
    })
}

delay('Hello', 3)
    .then((data) => {
        console.log(data);
        return delay('This my next message', 5)
    }).then(data => {
        console.log(data);
    }).then(data => {
        return data;
    }).then(data => {
        return data;
    }).then(data => {
        return data;
    }).catch(err =>{
        console.log(err.message)
        throw new Error('This another error');
    }).catch(err =>{
        console.log(err.message);
    })

    Promise.reject('Hello')
    .then(data => {
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })


    Promise.all([
        delay('Hello', 1),
        delay('Hello1', 2),
        delay('Hello2', 3),
        delay('Err', 7)])
        .then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err.message);
        })

        Promise.race([
            delay('Hello', 1),
            delay('Hello1', 2),
            delay('Hello2', 3),
            delay('Err', 7)])
            .then(data => {
                console.log(data)
            }).catch(err => {
                console.log(err.message);
            })