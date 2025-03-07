class ExampleClass{
    constructor(sConstructor){
        this.sString = sConstructor;
    }
    handleInput(sInput){
        return `${sInput} ${this.sString}`;
    }
}

// classes.js

export class Earthquake {
    constructor(intensity) {
        this.intensity = intensity;
    }

    damageLevel() {
        if (this.intensity < 5) return "Little or no damage";
        else if (this.intensity < 5.5) return "Some damage";
        else if (this.intensity < 6.5) return "Serious damage: walls may crack or fall";
        else if (this.intensity < 7.5) return "Disaster: buildings may collapse";
        else return "Catastrophe: most buildings and surroundings destroyed";
    }
}
