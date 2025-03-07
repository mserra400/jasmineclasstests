import { gymMembershipCost } from "../functions.js";

describe("Gym Membership Cost Calculation", () => {
    it("should return the full cost with 0 friends", () => {
        expect(gymMembershipCost(100, 0)).toBe(100);
    });

    it("should apply a 5% discount with 1 friend", () => {
        expect(gymMembershipCost(100, 1)).toBe(95);
    });

    it("should apply a 10% discount with 2 friends", () => {
        expect(gymMembershipCost(100, 2)).toBe(90);
    });

    it("should apply a 15% discount with 3 friends", () => {
        expect(gymMembershipCost(100, 3)).toBe(85);
    });

    it("should apply a 15% discount with 4 friends", () => {
        expect(gymMembershipCost(100, 4)).toBe(85); // Same discount as 3+ friends
    });
});
