const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes')
const colorValidate = require('./lib/colorKeywords')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters you want in your logo.',
        validate: (res) => {
            if (res.length > 3) {
                return console.log("\nYou cannot add more than three characters to the logo. Please try again.")
            }
            return true
        },
    },
    {
        type: 'input',
        name: 'textFill',
        message: 'Please enter your desired text color with either a color keyword or the hexidecimal number.',
        validate: (res) => {
            if (colorValidate(res)) {
                return true
                }
                return console.log("\nWe couldn't find that color. Please try again.")
        },
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape of your logo from the following:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeFill',
        message: 'Please enter your desired shape color with either a color keyword or the hexidecimal number.',
        validate: (res) => {
            if (colorValidate(res)) {
                return true
                }
                return console.log("\nWe couldn't find that color. Please try again.")
        },
    },
];

function generateLogo(data) {
    let logoShape;
    if (data.shape === 'Circle') {
        logoShape = new Circle(data.shapeFill, data.text, data.textFill);
    }
    if (data.shape === 'Triangle') {
        logoShape = new Triangle(data.shapeFill, data.text, data.textFill);
    }
    if (data.shape === 'Square') {
        logoShape = new Square(data.shapeFill, data.text, data.textFill);
    }
    return logoShape.render()
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err
        };
        console.log('Generated logo.svg')
    })
};

function init() {
    inquirer.prompt(questions)
        .then(data => {
            console.log(data)
            writeToFile('./examples/logo.svg', generateLogo(data))
        })
};

init();