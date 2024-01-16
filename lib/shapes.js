class Shape {
    constructor(type) {
      this.type = type;
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }

  }
  
  class Triangle extends Shape {
 
  }
  
  class Circle extends Shape {
   
  }
  
  class Square extends Shape {
   
  }
  
  module.exports = { Triangle, Circle, Square };
  
  