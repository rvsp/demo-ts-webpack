import { Engine } from "./engine";
import { CarConfiguration } from "./car-config";
import { EngineConfig } from "./engine-config";

type carDirection = "LEFT" | "RIGHT" | "FORWARD" | "REVERSE";


export class Car extends Engine {
    brand: string;
    speed: string;
    color: string;
    accelerator: string;
    initialState = 'STOPPED';
    transmission: string;

    constructor(carData: CarConfiguration, engineData: EngineConfig) {
        super(engineData);
        this.brand = carData.brandValue;
        this.speed = carData.speedValue;
        this.color = carData.colorValue;
        this.accelerator = carData.acceleratorValue;
        this.transmission = carData.transmissionValue;
    }

    start(): string {
        this.initialState = "STARTED";
        return this.initialState;
    }

    stop() {
        if (this.initialState == 'STARTED') {
            this.initialState = 'STOPPED';
            return this.initialState;
        } else {
            return 'Your car is not running';
        }
    }

    move(direction: carDirection) {
        console.log(direction);
    }

    transmissionType() {
        console.log(this.transmission);
    }

    getDetails() {
        (<HTMLDivElement>document.getElementById('display-3')).innerHTML = `
        your car ${this.start()} <br>
        Your brand -> ${this.brand} <br>
        Your speed -> ${this.speed} <br>
        Your color -> ${this.color} <br>
        Your accelerator -> ${this.accelerator} <br>
        Your transmission -> ${this.transmission} <br>
        car stopped ${this.stop()}
        `;
    }

}

