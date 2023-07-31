// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();