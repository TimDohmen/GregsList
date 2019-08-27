import JobService from "../Services/JobServices.js";


let _jobService = new JobService()

function draw() {
  let template = ''
  let jobs = _jobService.Job
  jobs.forEach((job) => {
    template += job.Template
  });
  document.querySelector("#jobs").innerHTML = template
}


export default class JobController {
  constructor() {

  }
  addJob(event) {
    event.preventDefault()
    let form = event.target
    let newJob = {
      location: form.jobLocation.value,
      category: form.category.value,
      salary: form.salary.value,
      image: form.jobimgUrl.value,
      skills: form.skillsRequired.value,
      description: form.jobDescription.value,

    }
    _jobService.addJob(newJob)
    draw()
  }

}