function PersonFunc(data) {
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.birthDate = data.birthDate;
  this.address = data.address;
  this.job = data.job;
}

PersonFunc.prototype.getFullName = function () {
  try {
    if (!this.firstName) throw new Error("First name is not defined");
    if (!this.lastName) throw new Error("Last name is not defined");
    return `${this.firstName} ${this.lastName}`;
  } catch (error) {
    console.error(error);
  }
};
PersonFunc.prototype.getAge = function () {
  try {
    if (!this.birthDate) throw new Error("Date is not defined");
    const bDate = this.birthDate.split(".");

    const newBDate = new Date(
      bDate[1].concat("/") + bDate[0].concat("/") + bDate[2]
    );
    if (isNaN(newBDate)) throw new Error("Date is not invalid");
    const ageDifMs = Date.now() - newBDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970) + " years";
  } catch (error) {
    console.error(error);
  }
};
PersonFunc.prototype.getFullAddress = function () {
  try {
    if (!this.address.country) throw new Error("country is not defined");
    if (!this.address.city) throw new Error("city is not defined");
    if (!this.address.street) throw new Error("street is not defined");
    if (!this.address.house && !this.address.apartment)
      throw new Error("house or appartment is not defined");
    return (
      this.address.country +
        ", " +
        this.address.city +
        ", " +
        this.address.street +
        ", " +
        this.address.house || this.address.apartment
    );
  } catch (error) {
    console.error(error);
  }
};

// const person = new PersonFunc(SarahMay);

// console.log(person.getFullAddress());

module.exports = PersonFunc;
