function hello(){
    return "hello";
}


export {hello}


export function totalCoinValue(nickels, dimes, quarters, loonies, toonies) {
    return (nickels * 0.05) + (dimes * 0.10) + (quarters * 0.25) + (loonies * 1.00) + (toonies * 2.00);
}

export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

export function cubeVolume(height) {
    return Math.pow(height, 3);
}

export function gymMembershipCost(cost, friends) {
    let discount = 0;
    if (friends >= 3) discount = 0.15;
    else if (friends === 2) discount = 0.10;
    else if (friends === 1) discount = 0.05;
    return cost * (1 - discount);
}

export class Earthquake {
    constructor(intensity) {
        this.intensity = intensity;
    }

    damageLevel() {
        if (this.intensity < 5) return "Little or no damage";
        else if (this.intensity < 5.5) return "Some damage";
        else if (this.intensity < 6.5) return "Serious damage: walls may crack or fall";
        else if (this.intensity < 7.5) return "Disaster: buildings may collapse";
        else return "Catastrophe: most buildings destroyed";
    }
}

export default {
    totalCoinValue,
    fahrenheitToCelsius,
    cubeVolume,
    gymMembershipCost
};
