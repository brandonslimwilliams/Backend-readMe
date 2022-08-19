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
      type: "input",
      name: "contribution",
      messege: "what contributions were made to the project?",
    },
    {
      type: "input",
      name: "instructions",
      messege: "how to test project?",
    },
    {
      type: "checkbox",
      name: "license",
      messege: "please choose a license",
      choices: ["MIT", "IPL_1.0", "NASA_1.3", "NPOSL_3.0", "OSL_3.0", "None"],
    },
    {
      type: "input",
      name: "username",
      messege: "enter username",
    },
    {
        type: 'input',
        name: 'email',
        messege: 'enter email',
    },
  ]).then((answers) => {
    fs.writeFile("README.md", generateMarkdown(answers), err => {
        err ? console.log(err) : console.log('README.md has been created!');
    })

  })
};

questions();


