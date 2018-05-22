describe("Addition", function () {
  it("should return the sum when the numbers are all positive", function () {
    expect(positiveSum([1, 2])).toBe(3);
  })

  it("should not include a negative number in the provided array as part of the sum", function () {
    expect(positiveSum([-1, 2])).toBe(2);
  })

  it("should return 0 when the povided array is empty", function () {
    expect(positiveSum([])).toBe(0);
  })

  it("should return 0 when the povided array is all negative", function () {
    expect(positiveSum([-1, -2])).toBe(0);
  })


});