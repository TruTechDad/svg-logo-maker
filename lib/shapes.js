class Shape {
    constructor(type) {
      this.type = type;
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // Implement other common shape methods if needed
  }
  
  class Triangle extends Shape {
    // Implement Triangle-specific methods
  }
  
  class Circle extends Shape {
    // Implement Circle-specific methods
  }
  
  class Square extends Shape {
    // Implement Square-specific methods
  }
  
  module.exports = { Triangle, Circle, Square };
  
  