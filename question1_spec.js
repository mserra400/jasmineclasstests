import { totalCoinValue } from "../functions.js";

describe("Total Coin Value", () => {
    it("should return 0 when no coins are provided", () => {
        expect(totalCoinValue(0, 0, 0, 0, 0)).toBe(0);
    });

    it("should calculate the correct total for a given number of coins", () => {
        expect(totalCoinValue(2, 3, 4, 1, 1)).toBe(4.35); // (2 * 0.05) + (3 * 0.10) + (4 * 0.25) + (1 * 1.00) + (1 * 2.00)
    });

    it("should work correctly with large numbers of coins", () => {
        expect(totalCoinValue(10, 10, 10, 10, 10)).toBe(35.50);
    });
});
