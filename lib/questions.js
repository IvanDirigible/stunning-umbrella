const questions = [
    {
        type: 'input',
        name: 'inputText',
        message: 'Please enter up to three characters you want in your logo.',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("You cannot add more than three characters to the logo. Please try again.")
            }
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

module.exports = questions;