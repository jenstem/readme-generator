// Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Question array
questions = [

    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "What is a short description of your project?",
        name: "description"
    },

    {
        type: "input",
        message: "Please provide instructions for installing your project.",
        name: "instructions"
    },

    {
        type: "input",
        message: "Please enter any usage information.",
        name: "usage"
    },

    {
        type: "list",
        message: "Please select a license from the following:",
        name: "license",
        choices:['MIT', 'Apache', 'NONE']
    },

    {
        type: "input",
        message: "Please add your contribution guidelines.",
        name: "contribution"
    },

    {
        type: "input",
        message: "Please enter any test instructions.",
        name: "test"
    },

    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "username"
    },

    {
        type: "input",
        message: "Please enter your email address.",
        name: "email"
    }
];

// README file function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error, data) {
        error ? console.error(error) : console.log("File successfully written!")
    })
}

// Initialize app function
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    })
}


init();