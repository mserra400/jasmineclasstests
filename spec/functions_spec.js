import { hello } from '../functions.js'

describe("A suite of tests for functions.js", function() {
    it('tests for a function named hello that returns "hello"', function() {
      let sHello = hello();
      expect(sHello).toEqual("hello");
    });
  });
  
  
// spec/functions_spec.js

import { totalCoinValue, fahrenheitToCelsius, cubeVolume, gymMembershipCost } from "../functions.js";

describe("Total Coin Value", () => {
    it("should return 0 when no coins are provided", () => {
        expect(totalCoinValue(0, 0, 0, 0, 0)).toBe(0);
    });
});

describe("Converts Fahrenheit to Celsius", () => {
    it("should correctly convert Fahrenheit to Celsius", () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
        expect(fahrenheitToCelsius(32)).toBe(0);
        expect(fahrenheitToCelsius(70)).toBeCloseTo(21.1, 1);
    });
});

describe("Calculates cube volume", () => {
    it("should return correct volume", () => {
        expect(cubeVolume(1)).toBe(1);
        expect(cubeVolume(3)).toBe(27);
        expect(cubeVolume(5)).toBe(125);
    });
});

describe("Calculates gym membership cost", () => {
    it("should apply the correct discount", () => {
        expect(gymMembershipCost(100, 0)).toBe(100);
        expect(gymMembershipCost(100, 1)).toBe(95);
        expect(gymMembershipCost(100, 2)).toBe(90);
        expect(gymMembershipCost(100, 3)).toBe(85);
        expect(gymMembershipCost(100, 4)).toBe(85);
    });
});
