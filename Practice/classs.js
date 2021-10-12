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