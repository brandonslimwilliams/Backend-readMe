// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your repository (Required)",
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
      message: "What is your repository about (Required)",
    },
    {
      type: "input",
      name: "installation",
      message: "what dependencies are being used?",
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
      message: "what is needed for the user to use the project?",
    },
    {
      type: "input",
      name: "contribution",
      message: "what contributions were made to the project?",
    },
    {
      type: "input",
      name: "instructions",
      message: "how to test project?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "please choose a license",
      choices: ["MIT", "IPL_1.0", "NASA_1.3", "NPOSL_3.0", "OSL_3.0", "None"],
    },
    {
      type: "input",
      name: "username",
      message: "enter username",
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter email',
    },
  ]).then((answers) => {
    fs.writeFile("README.md", generateMarkdown(answers), err => {
        err ? console.log(err) : console.log('README.md has been created!');
    })

  })
};

questions();


