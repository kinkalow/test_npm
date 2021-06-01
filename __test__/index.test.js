const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("returns FizzBuzz", () => {
    expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
  });
  it("returns Fizz", () => {
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  });
  it("returns Buzz", () => {
    expect(fizzbuzz(10)).toStrictEqual("Buzz");
  });
  it("returns the value", () => {
    expect(fizzbuzz(7)).toStrictEqual("7");
  });
});
