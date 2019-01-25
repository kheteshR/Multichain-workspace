let person= {name:'khetesh'};
let objectBase= Object.getPrototypeOf(person)
console.log(objectBase)
function LolConstructor(color){
    this.name="khetesh"
    this.color=color
}
LolConstructor.prototype.draw=function(){
    console.log("doing drawing");
}

function LolChildConstructor(color){
    LolConstructor.call(this,color)
    // Super(color)
    this.move=function(){
        console.log("move")
    }
}
LolChildConstructor.prototype=Object.create(LolConstructor.prototype)
// console.log(LolConstructor.prototype===Object.create(Object.prototype));
const lol=new LolChildConstructor("red");







//for in loop for iterating keys over lol object
for(let key in lol){
    console.log(key)
}




var personn = {
    fullName: function() {
      return "hello call method";
    }
  }
  var personn1 = {
    firstName:"John",
    lastName: "Doe",
  }
  var personn2 = {
    firstName:"Mary",
    lastName: "Doe",
  }
  
// personn1.prototype=Object.create(personn.prototype)
  console.log(personn1.fullName.call(this))



// class chepter