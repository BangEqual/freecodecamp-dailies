const sequence = require('../sequence');

test('Sequence works as expected', () => { 
    expect(sequence(5)).toBe("12345");
    expect(sequence(10)).toBe("12345678910");
    expect(sequence(1)).toBe("1");
    expect(sequence(27)).toBe("123456789101112131415161718192021222324252627");
}) 
