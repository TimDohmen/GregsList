import House from "../Models/house.js";

let _state = { house: [] }



export default class HouseService {
  constructor() {

  }
  addHouse(newHouse) {
    _state.house.push(new House(newHouse))
  }
  get House() {
    return _state.house.map(house => new House(house))
  }
}