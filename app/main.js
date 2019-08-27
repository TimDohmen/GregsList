import CarController from "./Controllers/controllers.js";
import HouseController from "./Controllers/housecontroller.js";
import JobController from "./Controllers/JobContoller.js";

class App {
  constructor() {
    console.log("app created")
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController()
    }
  }
}

window["app"] = new App()