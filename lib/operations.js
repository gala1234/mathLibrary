

const greatestCommonDivisor = (a, b) => {
    if (a == 0) {
        return b;
    }
    while (b != 0) {
        if (a > b) {
            a = a-b
        } else {
            b = b-a
        }
    }
    return a;
};


const commonMultiple = (a, b) => {
    //Cm = a*b / gCD(a,b)
    return a*b/greatestCommonDivisor(a,b);
};

const primeNumber = (a) => {
        if (a <= 1) {
          return true
        } else if (a <= 3) {
          return true
        } else if (a%2 === 0 || a%3 === 0) {
          return false
        }
       
        let i = 5
        while (i*i <= a) {
          if (a%i === 0 || a%(i+2) === 0) {
            return false
          }
          i += 6
        }
        return true
};

const coprimeNumbers = (a, b) => greatestCommonDivisor(a,b) === 1;

const scuareRoot = (a) => {
    let r;
    for(r=0; r < a; r += 0.001) if((r*r) > a) break;
    
    return r-0.001;
};


module.exports = {
    commonMultiple,
    greatestCommonDivisor,
    primeNumber,
    coprimeNumbers,
    scuareRoot,
 };

