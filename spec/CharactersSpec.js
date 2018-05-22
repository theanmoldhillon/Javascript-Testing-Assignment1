describe("Characters", function () {
    it("should return itself when there is only one character in the string", function () {
      expect(solution("a")).toBe("a");
    })
  
    it("should return the string reversed when there are multiple characters", function () {
      expect(positiveSum("abc")).toBe("cba");
    })
  
    it("should return empty string when there are no characters in the string", function () {
      expect(positiveSum([""])).toBe("");
    })

  
  
  });