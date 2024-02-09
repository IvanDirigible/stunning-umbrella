const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        name: 'inputText',
        message: 'Please enter up to three characters you want in your logo.',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\nYou cannot add more than three characters to the logo. Please try again.")
            }
            return true
        },
    },
    {
        type: 'list',
        name: 'inputTextFill',
        message: 'Next is the text color. Would you like to enter a color keyword or do you know the hexidecimal number for your desired color?',
        choices: ['Color Keyword', 'Hexidecimal Number'],
    },
    {
        type: 'input',
        name: 'inputTextKeyword',
        message: "Please enter your desired color and we'll see if we can find it.",
        when: (answers) => {
            if (answers.inputTextFill === 'Color Keyword') {
                return true
            }
        },
    },
    {
        type: 'input',
        name: 'inputTextHex',
        message: "Please enter the hexidecimal number of your desired color.",
        when: (answers) => {
            if (answers.inputTextFill === 'Hexidecimal Number') {
                return true
            }
        },
    },
    {
        type: 'list',
        name: 'inputShape',
        message: 'Please select the shape of your logo from the following:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'list',
        name: 'inputShapeFill',
        message: 'On to the shape color. Would you like to enter a color keyword or do you know the hexidecimal number for your desired color?',
        choices: ['Color Keyword', 'Hexidecimal Number'],
    },
    {
        type: 'input',
        name: 'inputShapeKeyword',
        message: "Please enter your desired color and we'll see if we can find it.",
        when: (answers) => {
            if (answers.inputShapeFill === 'Color Keyword') {
                return true
            }
        },
    },
    {
        type: 'input',
        name: 'inputShapeHex',
        message: "Please enter the hexidecimal number of your desired color.",
        when: (answers) => {
            if (answers.inputShapeFill === 'Hexidecimal Number') {
                return true
            }
        },
    },
];

function generateLogo(data) {
    let logoShape = ''
    if (data.inputShape === 'Circle') {
        logoShape = new Circle(data.inputShapeFill, data.inputText, data.inputTextFill);
    }
    if (data.inputShape === 'Triangle') {
        logoShape = new Triangle(data.inputShapeFill, data.inputText, data.inputTextFill);
    }
    if (data.inputShape === 'Square') {
        logoShape = new Square(data.inputShapeFill, data.inputText, data.inputTextFill);
    }
    console.log(logoShape);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${logoShape}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.inputTextKeyword}">${data.inputText}</text>

</svg>`
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
            writeToFile('logo.svg', generateLogo(data))
        })
};

init();