"use strict";

var person = { name: 'khetesh' };
var objectBase = Object.getPrototypeOf(person);
console.log(objectBase);
function LolConstructor(color) {
    this.name = "khetesh";
    this.color = color;
}
LolConstructor.prototype.draw = function () {
    console.log("doing drawing");
};

function LolChildConstructor(color) {
    LolConstructor.call(this, color);
    // Super(color)
    this.move = function () {
        console.log("move");
    };
}
LolChildConstructor.prototype = Object.create(LolConstructor.prototype);
// console.log(LolConstructor.prototype===Object.create(Object.prototype));
var lol = new LolChildConstructor("red");

//for in loop for iterating keys over lol object
for (var key in lol) {
    console.log(key);
}

var personn = {
    fullName: function fullName() {
        return "hello call method";
    }
};
var personn1 = {
    firstName: "John",
    lastName: "Doe"
};
var personn2 = {
    firstName: "Mary",
    lastName: "Doe"

    // personn1.prototype=Object.create(personn.prototype)
};console.log(personn1.fullName.call(undefined));

// class chepter
