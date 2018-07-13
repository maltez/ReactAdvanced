const { assert } = require('chai');
const validator = require('../src/validator.service');

describe('Test password validation service', () => {

    it('Input valid password', () => {
        const password = 'HelloWorld';

        const isValid = validator(password);

        assert.isTrue(isValid, 'Invalid password validation');
    });


});