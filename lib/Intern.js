// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//The code intern extends employee also inherit values from employee
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }

    getSchool() {
        return this.school;
    }

    getRole () {
        return "Intern"
    }
}

module.exports = Intern;