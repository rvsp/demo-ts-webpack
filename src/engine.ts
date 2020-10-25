import { EngineConfig } from "./engine-config";

export class Engine {
    horsePower: string;
    engineNo: string;
    cylinders: string;

    constructor(data: EngineConfig) {
        this.horsePower = data.horsePower;
        this.engineNo = data.engineNo;
        this.cylinders = data.cylinders;
    }

    getHorsePower() {
        return this.horsePower;
    }

    getCylinders() {
        return this.cylinders;
    }
}