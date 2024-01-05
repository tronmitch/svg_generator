let inquirer = require('inquirer');
let fs = require('fs');

const questions =  [{
    type: 'input',
    message: 'Enter text for logo (1-3 characters)',
    name: 'logo_text',
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
    choices: ['Circle','Triangle','Square']
    
},
{
    type: 'input',
    message: 'Enter shape color',
    name: 'logo_shape_color',
},
]

svgstring = ""
function createSVG () {
    inquirer.prompt(questions).then((response)=>{
        svgstring += `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.logo_text_color}">${response.logo_text}</text>
      
      </svg>`
    })
    fs.writeFile('logo.svg', svgstring, (err) => {
        err ? console.error(err) : console.log('successfully created SVG file')
    })
}