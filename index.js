// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./lib/generateSvg');
const { Triangle, Circle, Square } = require('./lib/shapes/shapes');

function getUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'logo-name',
      message: 'Please enter text, only 3 letters',
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
  ]);
}

function createShape(data) {
  switch (data['logo-shape']) {
    case 'triangle':
      const triangle = new Triangle(data['logo-name'], data['logo-color']);
      return triangle;
    case 'circle':
      const circle = new Circle(data['logo-name'], data['logo-color']);
      return circle;
    case 'square':
      const square = new Square(data['logo-name'], data['logo-color']);
      return square;
    default:
      throw new Error('Invalid shape choice');
  }
}

function runApp() {
  getUserInput()
    .then((data) => {
      const shape = createShape(data);
      const svgPath = './dist/logo.svg';

      fs.writeFile(svgPath, generateSvg(shape), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    })
    .catch((err) => console.error(err));
}

// Run the application
runApp();
