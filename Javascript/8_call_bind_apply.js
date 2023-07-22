//call() method allows an object to use the method (function) of another object.

var person = {
    age: 23,
    getAge: function(){
        return this.age;
    }
}        
var person2 = {age:  54};
person.getAge.call(person2);   

//call() accepts arguments:

const saySomething =  (message)=> {
    console.log("messagemessage", message)
    return this.name + " is " + message;
}     
var person4 = {
    name:  "John"
};     

console.log("----", saySomething.call(person4, "awesome"))






/////////////////////////
function sayHello(greeting) {
    console.log(`${greeting} ${this.name}`);
}

let bob = {
    name: 'Bob'
};
let adam = {
    name: 'Adam'
};

sayHello.call(bob, "Hello"); // will print 'Hello Bob' in your console
sayHello.call(adam, "Hi"); // will print 'Hi Adam in your console

//////////////////////////////////////////////////////////////////

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
// person.fullName.call(person1, "Oslo", "Norway");

  ////////////////////////////////////////////////////////////////////////////////

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.apply(person1, ["Oslo", "Norway"]);

/////////////////////////////////////////bind 

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);