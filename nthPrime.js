function nthPrime(n) {
    const isPrime = (num) => {
        if (num === 1) return false;
        if (num === 2 || num === 3) {
            return true;
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0)
                return false;
        }

        return true;
    }

    let currentNumberCheck = 1;
    let currentPosition = 1;
    let found = false;
    while (!found) {
        if (isPrime(currentNumberCheck)) {
            if (currentPosition === n) {
                return currentNumberCheck;
            }
            currentPosition++;
            currentNumberCheck++;
        } else {
            currentNumberCheck++;
        }
    }
}

module.exports = nthPrime;