import HouseService from "../Services/HouseService.js";


let _houseService = new HouseService()


function _draw() {
  let template = ''
  let houses = _houseService.House
  houses.forEach((house) => {
    template += house.Template
  })
  document.querySelector("#houses").innerHTML = template
}


export default class HouseController {
  constructor() {

  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target
    let newHouse = {
      location: form.location.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      sqfeet: form.sqfeet.value,
      price: form.houseprice.value,
      description: form.housedescription.value,
      imgUrl: form.houseimgUrl.value
    }
    _houseService.addHouse(newHouse)
    _draw()
  }
}