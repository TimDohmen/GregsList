import Car from "../Models/Car.js";


let _state = { cars: [] }

export default class CarService {
  addCar(newCar) {
    _state.cars.push(new Car(newCar))
    console.log(_state.cars)
  }
  constructor() {
    console.log("yo from service")
  }

  get Cars() {
    return _state.cars.map(car => new Car(car))
  }

}