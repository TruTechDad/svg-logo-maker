const { Triangle, Circle, Square } = require("./shapes");

test("Triangle render", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test("Circle render", () => {
  const circle = new Circle();
  circle.setColor("red");
  expect(circle.render()).toEqual('<circle cx="150" cy="150" r="75" fill="red" />');
});

test("Square render", () => {
  const square = new Square();
  square.setColor("green");
  expect(square.render()).toEqual('<rect width="150" height="150" fill="green" />');
});
