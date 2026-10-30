const nthPrime = require('../nthPrime');

test('Gets prime for given index', () => {
    expect(nthPrime(5)).toBe(11);
    expect(nthPrime(10)).toBe(29);
    expect(nthPrime(16)).toBe(53);
    expect(nthPrime(99)).toBe(523);
    expect(nthPrime(1000)).toBe(7919);
});