namespace AbstractNamespace{
    abstract class Vehicle{
        constructor(protected whellCount: number){}
        abstract updateWhellCount(newWhellCount: number): void;
        showNumberOfWhells(){
            console.log(`moved ${this.whellCount} whells`);
        }
    }

export class Motorcycle extends Vehicle{
    constructor(private czyMaKufer: boolean){
        super(2);
    }
        updateWhellCount = (newWhellCount: number) => {
            this.whellCount = newWhellCount;
            console.log(`updated whell count ${this.whellCount}`);
        }
    }


class Automobile extends Vehicle{
    public marka: string;
    updateWhellCount = (newWhellCount: number) => {
        this.whellCount = newWhellCount;
        console.log(`updated whell count ${this.whellCount}`);
    }
    showID(){
        console.log(`IDs ${this.marka} car`);
    }
}

}
const motor = new Motorcycle(true);
motor.showNumberOfWhells();

const auto = new Automobile(4);
auto.showNumberOfWhells();
auto.marka = "BMW";
auto.showID();