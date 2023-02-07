// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//The code Engineer extends employee also inherit values from employee

const Employee = require("./Employee"); 


class Engineer extends Employee { 
   constructor(name, id, email, github) { 
      super (name, id, email);
      this.github = github;
   }

   getGithub() { 
    return this.github;
   }

  getRole() { 
    return "Engineer"; 
  }

}

module.exports = Engineer;

