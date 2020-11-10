'use strict';

class Person {
  // generic blueprint that works for most people
  constructor(name, age, gender, city, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.city = city;
  }
}

class Animal {
  constructor(name, age, food) {
    this.name = name;
    this.age = age;
    this.food = food;
  }
}

// Person instance
const abdulkareem = new Person('Abdulkareem', 35, 'male', 'Riyadh', [
  'eat dates',
  'smoke water pipe',
]);

// Appending additional properties that apply to abdulkareem, like having children and being married!
// Could've done this inside the Person class directly, but wanted to create a generic blueprint with a list of Properties that apply to all kinds of Persons
abdulkareem.hasKids = 3;
abdulkareem.isMarried = true;
abdulkareem.job = 'Construction Worker';

// Will log all Abdulkareem's properties
console.log(abdulkareem);

// Horse instance
const adel = new Animal('Adel', 15, 'Grass');
adel.color = 'brown';
adel.activity = 'Help transport materials';
adel.keeper = 'Abdulkareem';

// check adel's properties
console.log(adel);
