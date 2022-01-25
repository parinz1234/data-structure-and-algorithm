const power = require("../1643084917.js");

describe("algorithms/power-number/1643084917", () => {
  test("should return the correct value", () => {
    const base = 2;
    const pow = 3;
    const expected = 8;
    expect(power(base, pow)).toEqual(expected);
  });

  test("should return the correct value", () => {
    const base = 2;
    const pow = 1;
    const expected = 2;
    expect(power(base, pow)).toEqual(expected);
  });

  test("should return the correct value", () => {
    const base = 2;
    const pow = 10;
    const expected = 1024;
    expect(power(base, pow)).toEqual(expected);
  });
});
