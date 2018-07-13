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

const superDelay = async function() {
    let msg = await delay('Hello', 3);
    //console.log(msg);
    return msg;
}

superDelay().then((data) => {
    console.log(data)
})