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