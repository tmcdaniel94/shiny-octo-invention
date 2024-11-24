const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');


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

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log("User's selected shape: ", answers.shape); // Debugging line to check the shape

        // Create the shape based on the user's choice
        let shape;
        switch (answers.shape) {
            case 'Circle':
                shape = new Circle();
                break;
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            default:
                throw new Error('Invalid shape');
        }

        // Set the color for the shape
        shape.setColor(answers.shapeColor);

        // Create the SVG content as a string based on user answers
        const svgContent = generateSvg(answers, shape);

        // Write the SVG string to a file
        fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) throw err;
            console.log('Generated logo.svg');
        });
    })
    .catch((err) => {
        console.error('Error in prompt:', err);
    });

// Function to generate SVG content
function generateSvg(answers, shape) {
    // Generate the text element
    const textSvg = `<text x="50%" y="65%" font-size="70" text-anchor="middle" fill="${answers.txtColor}">${answers.characters}</text>`;
    
    // Generate the shape element using the render() method of the shape class
    const shapeSvg = shape.render();
    
    // Combine the shape and text into a complete SVG structure
    return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${shapeSvg}
            ${textSvg}
        </svg>
    `;
}

// inquirer
//     .prompt(questions)
//     .then((answers) => {
//         fs.writeFile('logo.svg', answers, (err) => {
//             if (err) throw err;

//             console.log('Generated logo.svg');
//         })
//         // console.log(answers);
// })