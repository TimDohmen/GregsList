import CarService from "../Services/CarService.js";

let _carService = new CarService()


function draw() {
  let template = ''
  let cars = _carService.Cars
  cars.forEach(car => {
    template += car.Template
  });
  document.querySelector("#cars").innerHTML = template
}


export default class CarController {
  constructor() {
    console.log("heyo from controller")

  }

  addCar(event) {
    event.preventDefault()
    let form = event.target
    let newCar = {
      make: form.make.value,
      model: form.model.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      description: form.description.value,
      price: form.price.value,
    }
    _carService.addCar(newCar)
    draw()
  }
}