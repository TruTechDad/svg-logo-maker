class Shape {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200"><rect width="100%" height="100%" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200"><polygon points="150,45 300,300 0,300" fill="${this.shapeColor}"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  const generateSvg = ({ shape, text, textColor, shapeColor }) => {
    let genShape;
    switch (shape) {
      case "Triangle":
        genShape = new Triangle(text, textColor, shapeColor);
        break;
      case "Circle":
        genShape = new Circle(text, textColor, shapeColor);
        break;
      case "Square":
        genShape = new Square(text, textColor, shapeColor);
        break;
    }
    return genShape.render();
  };
  
  module.exports = generateSvg;
  