// spec/classes_spec.js

import { Earthquake } from "../classes.js";

describe("Earthquake Damage Level", () => {
    it("should return 'Little or no damage' for intensity 4.5", () => {
        expect(new Earthquake(4.5).damageLevel()).toBe("Little or no damage");
    });

    it("should return 'Some damage' for intensity 5.2", () => {
        expect(new Earthquake(5.2).damageLevel()).toBe("Some damage");
    });

    it("should return 'Serious damage: walls may crack or fall' for intensity 6", () => {
        expect(new Earthquake(6).damageLevel()).toBe("Serious damage: walls may crack or fall");
    });

    it("should return 'Disaster: buildings may collapse' for intensity 7", () => {
        expect(new Earthquake(7).damageLevel()).toBe("Disaster: buildings may collapse");
    });

    it("should return 'Catastrophe: most buildings and surroundings destroyed' for intensity 8", () => {
        expect(new Earthquake(8).damageLevel()).toBe("Catastrophe: most buildings destroyed");
    });
});
