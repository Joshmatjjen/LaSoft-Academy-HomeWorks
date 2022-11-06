const PersonFunc = require("./task1");

function WorkingPersonFunc(data) {
  PersonFunc.call(this, data);
}

WorkingPersonFunc.prototype = PersonFunc.prototype;

WorkingPersonFunc.prototype.getProfessionalNameAndRank = function () {
  try {
    if (!this.firstName) throw new Error("First name is not defined");
    if (!this.lastName) throw new Error("Last name is not defined");
    if (!this.job) throw new Error("Job is not defined");
    return `${this.firstName} ${this.lastName}, ${this.job.title}, job experience ${this.job.experience} years`;
  } catch (error) {
    console.log(error);
  }
};

const workingP = new WorkingPersonFunc();

console.log(workingP.getProfessionalNameAndRank());

module.exports = WorkingPersonFunc;
