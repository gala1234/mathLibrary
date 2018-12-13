
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

    it('Test common multiple', () => {
        let res = op.add(a, b);

        assert.ok(res > 0);
        assert.equal(res, a+b);
    });
    it('Test resta', () => {
        let res = op.sub(a, b);

        assert.equal(res, a-b);
    });
    it('Test div by zero', () => {
        try {
            op.div(a, 0);

            assert.ok(false);
        } catch(e) {
            assert.ok(true);
        }
    });
    it('Test Common Multiple', () => {
        let res = op.commonMultiple(a, b);
        try {
            res;

            assert.ok(false);
        } catch(e) {
            assert.ok(true);
        }
        assert.ok(res > 0);
        assert.equal(res, a+b);
    });
})

after(() => {
    console.log('after');
});