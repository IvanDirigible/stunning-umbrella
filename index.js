const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes')
const colorKeywords = require('./lib/colorKeywords')

// const inputTypeValidator = (input) => {
//     if (input !== colorKeywords.includes(input.toLowerCase()) || input !== /0x[\da-f]/i.test(input)) {
//         return console.log("\nWe couldn't find this color. Please try again.")
//     } else
//     return true
// };

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters you want in your logo.',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\nYou cannot add more than three characters to the logo. Please try again.")
            }
            return true
        },
    },
    {
        type: 'input',
        name: 'textFill',
        message: 'Please enter your desired text color with either a color keyword or the hexidecimal number.',
        // validate: (answer) => {
        //     if (answer !== colorKeywords.includes(answer.toLowerCase()) || answer !== /0x[\da-f]/i.test(answer)) {
        //         console.log(`Answer: ${answer}\n Answer.thing: ${answer.inputTextFill}`);
        //         return console.log("\nWe couldn't find this color. Please try again.")
        //     }
        //     return true
        // },
    },
    // {
    //     type: 'input',
    //     name: 'inputTextKeyword',
    //     message: "Please enter your desired color and we'll see if we can find it.",
    //     when: (answers) => {
    //         if (answers.inputTextFill === 'Color Keyword') {
    //             return true
    //         }
    //     },
    // },
    // {
    //     type: 'input',
    //     name: 'inputTextHex',
    //     message: "Please enter the hexidecimal number of your desired color.",
    //     when: (answers) => {
    //         if (answers.inputTextFill === 'Hexidecimal Number') {
    //             return true
    //         }
    //     },
    // },
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
    },
    // {
    //     type: 'input',
    //     name: 'inputShapeKeyword',
    //     message: "Please enter your desired color and we'll see if we can find it.",
    //     when: (answers) => {
    //         if (answers.inputShapeFill === 'Color Keyword') {
    //             return true
    //         }
    //     },
    // },
    // {
    //     type: 'input',
    //     name: 'inputShapeHex',
    //     message: "Please enter the hexidecimal number of your desired color.",
    //     when: (answers) => {
    //         if (answers.inputShapeFill === 'Hexidecimal Number') {
    //             return true
    //         }
    //     },
    // },
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