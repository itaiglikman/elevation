class Vehicle {
    // #carsSold=0;
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        Vehicle.carsSold++;
        this._fuel = fuel;
    }
    static getInfo() {
        console.log(Vehicle.carsSold);
    }

    static calcMoney() {
        console.log(Vehicle.carsSold * 30000);
    }

    set fuel(fuel) {
        if (0 > fuel || fuel > 150) return console.log("to much");
        this._fuel = fuel;
        // if (0 <= fuel <= 150) this._fuel = fuel;
        // else return console.log("to much");
    }

    get fuel() {
        return this._fuel;
    }
}

Vehicle.carsSold = 0;

const car = new Vehicle(1, 1, 100);
const car1 = new Vehicle(1, 1, 100);
Vehicle.getInfo();
Vehicle.calcMoney();
car.fuel = 200;
console.log(car._fuel);