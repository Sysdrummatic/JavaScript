import { Motorcycle } from "./dziedziczenie";

namespace AbstractNamespace {
    abstract class Vehicle {
        constructor(private whellCount: number) {}
        abstract updateWheelCount(newWheelCount: number): void;
        showNumberOfWhells() {
            console.log(`moved ${this.whellCount} whells`);
        }
    }
}

const motor4 = new Motorcycle(true);
motor4.updateWheelCount(4);
motor4.showNumberOfWhells();
