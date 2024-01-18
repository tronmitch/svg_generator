let inquirer = require('inquirer');
let fs = require('fs');
let shapes = require('./lib/shapes')
// const { find } = require('rxjs');
const maxChar = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxChar_input', maxChar);

const questions = [{
    type: 'maxChar_input',
    // type: 'input',
    message: 'Enter text for logo (1-3 characters)',
    name: 'logo_text',
    maxLength: 3
},
{
    type: 'input',
    message: 'Enter color for text',
    name: 'logo_text_color',
},
{
    type: 'list',
    message: 'Select a shape for logo',
    name: 'logo_shape',
    choices: ['Circle', 'Triangle', 'Square']

},
{
    type: 'input',
    message: 'Enter shape color',
    name: 'logo_shape_color',
},
]
//Not using this Array - replaced with class
// const shapeList = [
//     {
//         id: 'Circle',
//         value: `circle cx="150" cy="110" r="80"`
//     },
//     {
//         id: 'Square',
//         value: `rect x="50" y="10" width="200" height="200"`
//     },
//     {
//         id: 'Triangle',
//         value: `polygon points="150,10 0,160 300,160"`
//     }
// ]

svgstring = ""
function createSVG() {
    inquirer.prompt(questions).then((response) => {
        let svgName = `${response.logo_shape}_${response.logo_shape_color}_${response.logo_text}`
        let svgShape = response.logo_shape.toLowerCase();
        console.log(svgShape)
  
        let shapesInstance = new shapes.SVGshape();
    
        
        let shapeMethod = shapesInstance[svgShape]();
        svgstring += `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${shapeMethod} fill="${response.logo_shape_color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.logo_text_color}">${response.logo_text}</text>
      
      </svg>`
      fs.writeFile(`./example/${svgName}.svg`, svgstring, (err) => {
        err ? console.error(err) : console.log('successfully created SVG file')
    })
    })
  
}

function init(){
    createSVG();
}

init();
module.exports = {
    createSVG,
    questions
}