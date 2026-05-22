import calculator from "../src/calculator.js";

test("adds two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("divides two numbers", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});
