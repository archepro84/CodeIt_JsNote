function _10() {
    function add(a, b) {
        return a + b
    }


    exports.plus = add;

    let calculator = {
        PI: 3.14,
        add: (a, b) => {
            return a + b
        },
        substract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
    }
    module.exports = calculator


    console.log('exports ------------------------->');
    console.dir(exports);
    console.log('require ------------------------->');
    console.dir(require);
    console.log('module ------------------------->');
    console.dir(module);
    console.log('__filename ------------------------->');
    console.dir(__filename);
    console.log('__dirname ------------------------->');
    console.dir(__dirname);

}

function _12() {

    function factorial(num) {
        let val = 1;
        for (let i = 2; i <= num; i += 1) {
            val *= i;
        }
        return val;
    }

    module.exports = {getFactorial: factorial};

}