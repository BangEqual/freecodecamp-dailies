const isValidIPv4 = require('../isValidIpv4');

test('Module test true for valid ips only', () => {
    expect(isValidIPv4("192.168.1.1")).toBe(true);
    expect(isValidIPv4("0.0.0.0")).toBe(true);
    expect(isValidIPv4("255.255.255.255")).toBe(true);
    expect(isValidIPv4("208.67.222.222")).toBe(true);
    expect(isValidIPv4("255.01.50.111")).toBe(false);
    expect(isValidIPv4("255.00.50.111")).toBe(false);
    expect(isValidIPv4("256.101.50.115")).toBe(false);
    expect(isValidIPv4("192.168.101.")).toBe(false);
    expect(isValidIPv4("192168145213")).toBe(false);
    expect(isValidIPv4("192.168.1.a")).toBe(false);
    expect(isValidIPv4("192.168.o.1")).toBe(false);
    expect(isValidIPv4("192.168.1.1a")).toBe(false);
});