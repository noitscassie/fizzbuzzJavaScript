describe("Fizzbuzz", function() {
  it("should print Fizz when number equals 3", function() {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  it("should print out Buzz when number equals 5", function() {
    expect(fizzbuzz(5)).toBe("Buzz")
  });
  it("should return Fizz for when number equals 6", function() {
    expect(fizzbuzz(6)).toBe("Fizz")
  });
  it("should return Buzz for when number equals 10", function() {
    expect(fizzbuzz(10)).toBe("Buzz")
  });
  it("should return the number 7 when number equals 7", function() {
    expect(fizzbuzz(7)).toBe(7)
  });
  it("should return Fizzbuzz when the number equals 15", function() {
    expect(fizzbuzz(15)).toBe("Fizzbuzz")
  });
});
