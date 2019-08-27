import Job from "../Models/Job.js";


let _state = { job: [] }

export default class JobService {
  constructor() {

  }
  addJob(newJob) {
    _state.job.push(new Job(newJob))
  }
  get Job() {
    return _state.job.map(job => new Job(job))
  }

}