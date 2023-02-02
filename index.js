// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food);
  }
}

Person.prototype.poop = function() {
  this.stomach = [];
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`
}

// const hero = new Person("Mary", 50);

// console.log("hero name:", hero.name);
// console.log("hero age: ", hero.age);
// console.log("stomach contents:", hero.stomach);

// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");
// hero.eat("pizza");

// console.log("stomach contents:", hero.stomach);

// hero.poop();

// console.log("stomach contents:", hero.stomach);

// console.log(hero.toString());

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg) {
  this.model = model;
  this.milesPerGallon = mpg;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function(distance) {
  // calculate available miles
  const miles = (this.tank * this.milesPerGallon);

  if (miles === 0) {
    return "There's no gas!"
  } else if (miles < distance) {
    this.tank = 0;
    this.odometer += miles;
    return `I ran out of fuel at ${this.odometer} miles!`
  } else {
    const usedGallons = distance / this.milesPerGallon;
    this.tank -= usedGallons;
    this.odometer += distance;
  }
}

// const escape = new Car("Ford", 18);

// console.log(escape.model);
// console.log(escape.milesPerGallon);
// console.log(escape.tank);
// console.log(escape.odometer);

// escape.fill(10);

// console.log(escape.tank);

// console.log(escape.drive(200));
// console.log("available gas:   ", escape.tank);
// console.log("current odometer:",escape.odometer);

// console.log(escape.drive(100));
// console.log("available gas:   ", escape.tank);
// console.log("current odometer:",escape.odometer);

// escape.fill(5);

// console.log(escape.drive(50));
// console.log("available gas:   ", escape.tank);
// console.log("current odometer:",escape.odometer);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

// const bella = new Baby("Bella", 1, "Rattle");

// console.log(bella);
// console.log(bella.play());

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. The default principle for "this" will refer to the global or window object prototype, depending on your environment.
  2. The second principle for "this" refers to implicit binding, whereby an object separated by a dot to the left of the function sets the context.
  3. The third principle for "this" refers to explicit binding, whereby a "call" or "apply" function is used to explicitly set the context.
  4. The fourth principle for "this" refers to using a constructor function with the "new" keyword to establish context for a specific instance.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
