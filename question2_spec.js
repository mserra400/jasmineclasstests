import { fahrenheitToCelsius } from "../functions.js";

describe("Fahrenheit to Celsius Conversion", () => {
    it("should return 100 for boiling water (212°F)", () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });

    it("should return 0 for freezing water (32°F)", () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });

    it("should return approximately 21.1 for room temperature (70°F)", () => {
        expect(fahrenheitToCelsius(70)).toBeCloseTo(21.1, 1);
    });
});
