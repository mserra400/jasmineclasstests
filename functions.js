function hello(){
    return "hello";
}


export {hello}

// functions.js

// Function to calculate the total value of coins
export function totalCoinValue(nickels, dimes, quarters, loonies, toonies) {
    return (nickels * 0.05) + (dimes * 0.10) + (quarters * 0.25) + (loonies * 1.00) + (toonies * 2.00);
}

// Function to convert Fahrenheit to Celsius
export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to calculate volume of a cube
export function cubeVolume(height) {
    return Math.pow(height, 3);
}

// Function to calculate gym membership cost with discount
export function gymMembershipCost(cost, friends) {
    let discount = 0;
    if (friends >= 3) discount = 0.15;
    else if (friends === 2) discount = 0.10;
    else if (friends === 1) discount = 0.05;
    return cost * (1 - discount);
}

// Export all functions
export default {
    totalCoinValue,
    fahrenheitToCelsius,
    cubeVolume,
    gymMembershipCost
};
