
export default class Car {
  constructor(data) {
    console.log("hi from car model")
    this.model = data.model
    this.make = data.make
    this.year = data.year
    this.description = data.description || "No Description Provided"
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
    <div class="col-4 border">
    <h1>${this.make}</h1>
    <h3>${this.model}</h3>
    <h3>${this.year}</h3>
        <img src="${this.imgUrl}" alt="" class="car-img">
        <p>${this.price}</p>
        <p>${this.description}</p>
      </div>`
  }



}