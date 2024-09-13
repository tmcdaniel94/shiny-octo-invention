const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const shapes = require('./lib/shapes');
const fs = require('fs');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const questions = [
    {
        type: 'maxlength-input',
        message: 'Input logo text, up to three characters.',
        name: 'characters',
        maxLength: 3,
    },
    {
        type: 'input',
        message: 'Input color (keyword or code) for text',
        name: 'txtColor',
    },
    {
        type: 'list',
        message: 'Choose logo shape.',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'Input color (keyword or code) for shape.',
        name: 'shapeColor',
    },
]

const questionAnswers

function writeFile(data) {

}

// render () {

// }

inquirer
    .prompt(questions)
    .then((answers) => {
        fs.writeFile('logo.svg', answers, (err) => {
            if (err) throw err;

            console.log('Generated logo.svg');
        })
        // console.log(answers);
})