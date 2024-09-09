const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'Input up to three characters',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'Input color keyword or code for text',
        name: 'txtColor',
    },
    {
        type: 'list',
        message: 'Choose shape',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'Input color keyword or code for shape',
        name: 'shapeColor',
    },
]

inquirer
    .prompt(questions)
    .then((answers) => {
        // fs.writeFile()
        console.log(answers);
})