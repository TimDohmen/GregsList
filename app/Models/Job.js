

export default class Job {
  constructor(data) {
    this.location = data.location
    this.category = data.category
    this.salary = data.salary
    this.imgUrl = data.imgUrl
    this.skills = data.skills
    this.description = data.description
  }

  get Template() {
    return `
   <div class="col-4 border">
<h3>${this.location}</h3>
<h5>${this.category}</h5>
<h5>${this.salary}</h5>
<img src="${this.imgUrl}" alt="" class="img">
<p>${this.skills}</p>
<p>${this.description}</p>
</div>
    `
  }

}