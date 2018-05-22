describe("Division", function () {
  it("should return true when a number is divisible by both of the provided divisors", function () {
    expect(isDivisible([100, 2, 5])).toBe(true);
  })

  it("should return false when the number is smaller than both the provided divisors", function () {
    expect(isDivisible([2, 4, 8])).toBe(false);
  })

  it("should return false when the number is not divisible by one of the provided divisors", function () {
    expect(isDivisible([100, 2, 9])).toBe(false);
  })

  it("should return false when the number is not divisible by any of the provided divisors", function () {
    expect(isDivisible([7, 3, 4])).toBe(false);
  })


});