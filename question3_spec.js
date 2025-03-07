import { cubeVolume } from "../functions.js";

describe("Cube Volume Calculation", () => {
    it("should return 1 for a cube with height 1m", () => {
        expect(cubeVolume(1)).toBe(1);
    });

    it("should return 27 for a cube with height 3m", () => {
        expect(cubeVolume(3)).toBe(27);
    });

    it("should return 125 for a cube with height 5m", () => {
        expect(cubeVolume(5)).toBe(125);
    });
});
