import { earthquakeDamage } from "../functions.js";

describe("Earthquake Damage Classification", () => {
    it("should return 'Little or no damage' for intensity below 5", () => {
        expect(earthquakeDamage(4.5)).toBe("Little or no damage");
    });

    it("should return 'Some damage' for intensity between 5 and 5.5", () => {
        expect(earthquakeDamage(5.2)).toBe("Some damage");
    });

    it("should return 'Serious damage: walls may crack or fall' for intensity between 5.5 and 6.5", () => {
        expect(earthquakeDamage(6.0)).toBe("Serious damage: walls may crack or fall");
    });

    it("should return 'Disaster: buildings may collapse' for intensity between 6.5 and 7.5", () => {
        expect(earthquakeDamage(7.0)).toBe("Disaster: buildings may collapse");
    });

    it("should return 'Catastrophe: most buildings destroyed' for intensity 7.5 or higher", () => {
        expect(earthquakeDamage(8.0)).toBe("Catastrophe: most buildings destroyed");
    });
});
