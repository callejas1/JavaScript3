'use strict';

class Person {
  // generic blueprint that works for most people
  constructor(name, age, gender, married, kids, city, interests, job) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.married = married;
    this.kids = kids;
    this.interests = interests;
    this.city = city;
    this.job = job;
  }
}

class Animal {
  constructor(name, age, food, color, activity, keeper) {
    this.name = name;
    this.age = age;
    this.food = food;
    this.color = color;
    this.activity = activity;
    this.keeper = keeper;
  }
}

// Person instance
const abdulkareem = new Person(
  'Abdulkareem',
  35,
  'male',
  true,
  3,
  'Riyadh',
  ['eat dates', 'smoke water pipe'],
  'Construction Worker',
);

// Horse instance
const adel = new Animal(
  'Adel',
  15,
  'Grass',
  'brown',
  'Help transport materials',
  'Abdulkareem',
);

// Will log all Abdulkareem's properties
console.log(abdulkareem);

// check adel's properties
console.log(adel);
