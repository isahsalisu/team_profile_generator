// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// The code import employee constructor

const Employee = require("./Employee");
//We extends employee and inherit name id email from employee and make office number in the constructor

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
//
    getRole() {
        return "Manager";
    }
}
// section export
module.exports = Manager;