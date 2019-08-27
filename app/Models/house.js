

export default class House {
  constructor(data) {
    this.location = data.location
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.sqfeet = data.sqfeet
    this.price = data.price
    this.description = data.description

  }


  get Template() {
    return `
<div class="col-4 border">
      <h3>${this.location}</h3>
      <h5>${this.bedrooms} bedrooms</h5>
      <h5>${this.bathrooms} bathrooms</h5>
      <img src="${this.imgUrl}" alt="" class="img">
      <p>${this.sqfeet} square feet</p>
      <p>$${this.price}</p>
      <p>${this.description}</p>
</div>`
  }
}
