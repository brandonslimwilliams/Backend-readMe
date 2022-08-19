// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      messege: "What is the name of your repository (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      messege: "What is your repository about (Required)",
    },
    {
      type: "input",
      name: "installation",
      messege: "what dependencies are being used?",
      validate: (installation) => {
        if (installation) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      messege: "what is needed for the user to use the project?",
    },
    {
        
    }
  ]);
};

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
