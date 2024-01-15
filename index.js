const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./lib/generateSvg');
const { makeShape } = require('./lib/makeShape');

function runApp() {
    inquirer
          .prompt([
            {
              type: 'input',
              name: 'logo-name',
              message: 'Please enter text, only 3 letters',
            },
            {
              type: 'input',
              name: 'text-color',
              message: `Please enter text color keyword`,
            },
            {
              type: 'input',
              name: 'logo-color',
              message: `Please enter a color keyword`,
            },
            {
              type: 'list',
              name: 'logo-shape',
              message: `Please choose logo shape`,
              choices: ['triangle', 'circle', 'square'],
            },
          ])
          .then((data) => {
            const svgPath = './dist/logo.svg';
            const finalLogo = makeShape(data);
      
            // Generate the svg logo here.
            fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
              err ? console.error(err) : console.log('Generated logo.svg')
            );
          })
          .catch((err) => console.error(err));
      }
      
      // Run the application
      runApp();