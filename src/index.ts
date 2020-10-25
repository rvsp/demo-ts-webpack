import { Car } from "./car";


(<HTMLElement>document.getElementById('button')).addEventListener('click', () => {
    let brandValue = (<HTMLFormElement>document.getElementById('brand')).value;
    let speedValue = (<HTMLFormElement>document.getElementById('speed-value')).value;
    let acceleratorValue = (<HTMLFormElement>document.getElementById('accelerator-value')).value;
    let colorValue = (<HTMLFormElement>document.getElementById('color-value')).value;
    let transmissionValue = (<HTMLFormElement>document.getElementById('transmission-value')).value;

    let car = new Car(
        {
            brandValue,
            speedValue,
            acceleratorValue,
            colorValue,
            transmissionValue
        },
        {
            horsePower: '1000',
            engineNo: '65465456415649654',
            cylinders: '5',
        }
    );
    // console.log(car.start());
    // car.move('LEFT');
    // car.transmissionType();
    // console.log(car.getCylinders());
    // console.log(car.getHorsePower());
    // car.stop();

    car.getDetails();

});


