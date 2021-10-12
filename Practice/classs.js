/*
Create a class that takes the following four arguments for a particular football player:

name
age
height
weight
Also, create three functions for the class that returns the following strings:

getAge() returns "name is age age"
getHeight() returns "name is heightcm"
getWeight() returns "name weighs weightkg"

*/


class Player {

    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    getAge = () => `${this.name} is age ${this.age}`;
    getHeight = () => `${this.name} is ${this.height}cm`;
    getWeight = () => `${this.name} weighs ${this.weight}kg`;

}





/*
Simple OOP Calculator

Create functions for the Calculator class that can do the following:

Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.
*/

class Calculator {
    //write functions to add(), subtract(), multiply() and divide()//
    add = (a, b) => a + b;
    subtract = (a, b) => a - b;
    multiply = (a, b) => a * b;
    divide = (a, b) => a / b;
}


/*
Point Series 1: Skeleton

Write a class called Point that represents a point in two-dimensional. It should have the following constructor:

constructor(x, y)
It should have the following properties:

x

y
It should have the following methods:

toString()

*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `[x=${this.x}, y=${this.y}]`;
    }
}





/*
Make a Circle with OOP

Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
let circy = new Circle(11)
circy.getArea()

// Should return 380.132711084365

Notes
Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.


*/


class Circle {
    constructor (radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }