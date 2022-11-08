const PersonClass = require("./task3");

class WorkingPersonClass extends PersonClass {
  constructor() {
    super();
  }

  getProfessionalNameAndRank() {
    try {
      if (!this.firstName) throw new Error("First name is not defined");
      if (!this.lastName) throw new Error("Last name is not defined");
      if (!this.job) throw new Error("Job is not defined");
      return `${this.firstName} ${this.lastName}, ${this.job.title}, job experience ${this.job.experience} years`;
    } catch (error) {
      console.error(error);
    }
  }
}

// let workingP = new WorkingPersonClass();
// console.log(workingP.getProfessionalNameAndRank());

module.exports = WorkingPersonClass;
