const factorial = function(input) {
    if(input < 0) {
        throw new RangeError('Invalid input range')
    }
    if(input === 0) {
        return 1;
    }
    
    return factorial(input - 1) * input;
}

module.exports = factorial;