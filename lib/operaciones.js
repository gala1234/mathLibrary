

const add = (a,b) => a+b;

const sub = (a,b) => a-b;

const mult = (a,b) => a*b;

const div = (a,b) => {
    if (b == 0) {
        throw new Error('div by zero');
    }
    a/b
};

const commonMultiple = (a, b) => {
    //Common multiple by Euricles algorithm
    return a*b/mcd(a,b);
};

module.exports = {
    add,
    sub,
    mult,
    div,
    commonMultiple,
};
