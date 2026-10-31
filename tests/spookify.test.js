const spookify = require('../spookify');

test('It spookifies text correctly', () => {
    expect(spookify("hello_world")).toBe("HeLlO~wOrLd");
    expect(spookify("Spooky_Case")).toBe("SpOoKy~CaSe");
    expect(spookify("TRICK-or-TREAT")).toBe("TrIcK~oR~tReAt");
    expect(spookify("c_a-n_d-y_-b-o_w_l")).toBe("C~a~N~d~Y~~b~O~w~L");
    expect(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts")).toBe("ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS");
});