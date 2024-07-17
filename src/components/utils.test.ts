import { addTwoNumbers, generateRandomNumber } from "./utils";

describe("Utils - addTwoNumbers", () => {
  it("should add two numbers", () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
  });

  it("should add negative numbers", () => {
    expect(addTwoNumbers(-1, -2)).toBe(-3);
  });
});

describe("Utils - generateRandomNumber", () => {
  it("should generate a random number", () => {
    expect(generateRandomNumber()).toBeGreaterThanOrEqual(0);
    expect(generateRandomNumber()).toBeLessThanOrEqual(100);
  });
});
