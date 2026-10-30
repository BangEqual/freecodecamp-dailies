const format = require('../format');

test('Formats the time correctly', () => {
    expect(format(500)).toBe("8:20");
    expect(format(4000)).toBe("1:06:40");
    expect(format(1)).toBe("0:01");
    expect(format(99999)).toBe("27:46:39");
});