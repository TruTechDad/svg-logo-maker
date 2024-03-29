class Shape {
  constructor(type, color = "") {
    this.type = type;
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("render() method must be implemented by the child class");
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="150" r="75" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="150" height="150" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };

  