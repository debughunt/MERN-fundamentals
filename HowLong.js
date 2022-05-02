Number.prototype.isPrime = function(i = 2) {
        for( let i=2; i<this; i++ ) {
            return this % i === 0 ?  false : true;
        }
    }

    const { performance } = require('perf_hooks');
    const start = performance.now();
    let primeCount = 0;
    let num = 2; // for math reasons, 1 is considered prime
    while( primeCount < 1e4 ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }
    console.log(`The 10,000th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
