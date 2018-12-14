const math = require('mathjs');
const assert = require('assert');
const op = require ('../lib/operaciones');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let a;
let b;

before(() => {
    console.log('before');
    a = 0;
    b = 0;
});

describe('Properties to validate', () => {
    beforeEach(() => {
        a = getRandomInt(0, 1000);
        b = getRandomInt(0, 1000);
    });

    afterEach(() => {
        a = 0;
        b = 0;
    });

    it('Test Common Multiple', () => {
        let res = op.commonMultiple(a, b);

        assert.ok(res/a% 1 == 0);
        assert.ok(res/b% 1 == 0);
        assert.equal( res, (a*b)/op.greatestCommonDivisor(a,b));
    });

    it('Test Greatest Common Divisor', () => {
        let res = op.greatestCommonDivisor(a, b);

        assert.ok(a/res% 1 == 0);
        assert.ok(b/res% 1 == 0);
    });

    it('Test Prime Number', () => {
        let res = op.primeNumber(a);
        
        assert.equal( res, math.isPrime(a));
    });

    it('Test Coprime Number', () => {
        let res = op.coprimeNumbers(a, b);
        
        assert.equal( res, math.gcd(a, b)===1);
    });

    it('Test Scuare Root', () => {
        let res = op.scuareRoot(a);
        
        assert.equal( Math.trunc(res*1000), Math.trunc(Math.sqrt(a)*1000));
    });
})
