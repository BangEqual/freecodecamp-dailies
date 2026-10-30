const navigate = require('../navigator');

test('navigates correctly', () => {
    expect(navigate(["Visit About Us", "Back", "Forward"])).toBe('About Us');
    expect(navigate(["Forward"])).toBe('Home');
    expect(navigate(["Back"])).toBe('Home');
    expect(navigate(["Visit About Us", "Visit Gallery"])).toBe('Gallery');
    expect(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"])).toBe('Home');
    expect(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"])).toBe('Contact');
    expect(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"])).toBe('Visit Us');
    expect(navigate(["Visit About", "Visit Gallery", "Back", "Forward", "Back", "Forward"])).toBe('Gallery');
});