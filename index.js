// This is the node modules
// This code requires three classes, Manager, Engineer, and Intern, which are  defined in "lib" directory.

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// The two npm packages: "inquirer" and "path". inquirer is used to prompt the user for input, and path is used to work with file paths.

const inquirer = require("inquirer");
const path = require("path");

//  the "fs" (file system) module, which provides an API for interacting with the file system.

const fs = require("fs");

// This defines two constants: OUTPUT_DIR and outputPath. OUTPUT_DIR is set to the resolved path of the "output" directory relative to the current file's directory (__dirname). outputPath is set to the full path to the "team.html" file within the OUTPUT_DIR directory, using the path.join method.

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This code exports a function for rendering the HTML file. The function takes in information about the team and returns the generated HTML content.

const render = require("./src/page-template.js");

// This code checks if the OUTPUT_DIR directory exists using fs.existsSync, and if not, creates the directory using fs.mkdirSync. The fs.mkdirSync method is used to synchronously create a directory, meaning the script will block until the directory is created.

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.
//engineer type create
const engineerQuestion = [
  {
    type: "input",
    name: "name",
    message: "Type in the engineer's name?",
    validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please, you must enter engineer\'s name ***\n');
        return false;
      },
  },

  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?",
    validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please, you must enter engineer\'s  id ***\n');
        return false;
      },
  },

  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
    validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please, you must enter engineer\'s email address ***\n');
        return false;
      },

  },

  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
    validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please, you must enter engineer\'s GitHub username ***\n');
        return false;
      },
  },
];

//intern type create
const internQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
    validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please, you must enter intern\'s name ***\n');
        return false;
      },
  },

  {
    type: "input",
    name: "id",
    message: "What is the intern's id?",
    validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please, you must  enter intern\'s id ***\n');
        return false;
      },
  },

  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
    validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please, you must enter intern\'s email address! ***\n');
        return false;
      },
  },

  {
    type: "input",
    name: "school",
    message: "What is name of intern's school?",
    validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please you must enter intern\'s school! ***\n');
        return false;
      },
  },
];

// This section prompts manager create, and then choose members type
const  completeTeamMembers = [];
console.log("\n--------Please generate the Team Profile--------\n *** Ensure you input the correct details! ***\n");

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?",
      validate: user_input => {
        if (user_input ) return true;
        console.log('\n*** Please enter manager\'s name ***\n');
        return false;
},

      
},
    
    {
      type: "input",
      name: "managerId",
      message: "What is the manager's id?",
      validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** You must enter manager\'s id ***\n');
        return false;
      },

    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email?",
      validate:  user_input => {
        if ( user_input) return true;
        console.log('\n*** Please enter manager\'s email address ***\n');
        return false;
      },
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?",
      validate:  user_input => {
        if ( user_input) return true;
        console.log('\n***Please enter manager\'s office number ***\n');
        return false;
      },
    },

    // This line starts a promise that will run when the previous promise (the one that prompts the user for manager information) is resolved.

  ]).then((managerAnswer) => {
    completeTeamMembers.push(
        // This line pushes a new instance of the Manager class to the completeTeamMembers array. The properties of the Manager instance are passed in as arguments, which come from the managerAnswer object that was returned by the previous promise.

      new Manager(
        managerAnswer.managerName,managerAnswer.managerId,managerAnswer.managerEmail,managerAnswer.managerOfficeNumber
           
      )
    );

    addEmployee();
  });

const completeTeamProcess = () => {
  fs.writeFileSync(outputPath, render( completeTeamMembers), "utf-8");
};

//to select emplyee type
const addEmployee = () => {
  inquirer
    .prompt({
      type: "list",
      name: "addEmployeeType",
      message: "Choose an employee type?",
      choices: ["Engineer", "Intern", "Form team"],
    })
    .then(({ addEmployeeType }) => {
      if (addEmployeeType === "Engineer") {
        inquirer.prompt(engineerQuestion).then((engineerAnswer) => {
          if (
            // This line checks if any of the required fields in the engineerAnswer object are missing, and if so, logs an error message to the console and calls the addEmployee function again.

            !engineerAnswer.name || !engineerAnswer.id || !engineerAnswer.email || !engineerAnswer.github

          ) 
          {
            console.error("All the fields must be filled");
            return addEmployee();
          }
          completeTeamMembers.push(
            new Engineer(
              engineerAnswer.name, engineerAnswer.id, engineerAnswer.email,  engineerAnswer.github
        
            )
          );
          addEmployee();
        });
      } else if (addEmployeeType === "Intern") {
        inquirer.prompt(internQuestion).then((internAnswer) => {
          if (
            !internAnswer.name || !internAnswer.id ||  !internAnswer.email || !internAnswer.school 
          )
           {
            console.error("All the fields must be filled");
            return addEmployee();
          }
          completeTeamMembers.push(
            new Intern(
              internAnswer.name, internAnswer.id, internAnswer.email,internAnswer.school
                
            )
          );
          addEmployee();
        });
      } else if (addEmployeeType === "Form team") {
        completeTeamProcess();
      }
    });
};
