// -16-
// Prototype Part 3 Extend Constructors:
/* let myString = "kinan";
console.log(String.prototype);
String.prototype.zFill = function (width) {
    let theResult = this;
    while(theResult.length < width) {
        theResult = `0${theResult}`;
    }
    return theResult.toString();
};
console.log("12".zFill(6));
console.log("516".zFill(6));
console.log("3625".zFill(6));
console.log("25145".zFill(6));
console.log("987654".zFill(6));

String.prototype.sayYouLoveMe = function () {
    return `I Love You ${this}`
};
console.log("kinan".sayYouLoveMe()); */

// -17-
// Prototype Part 4 Prototype Chain:
/* Prototype:
-1- Every Object Has A Prototype
-2- Prototype Chain Ends With Object.prototype
-3- In Javascript Function Is Object */

/* function user(name){
    // -1- Create Empty Object.
    // -2- Assign The New Object To this Context.
    // -3- New Object Created Prototype = Function Prototype.
    // this = {};
    // this.__proto__ = user.__proto__
    this.name = name;
    // -4- Return The New Object.
    Return this

    // Lösung 1:
    if(!(this instanceof user)){
    // throw new Error("Must Be Called With New Keyword");

    // Lösung 2:
       console.log("Error");
   }
    // Lösung 3:
    // ES6
    if(!new.target){
    throw new Error("Must Be Called With New Keyword");
   }
}

let user1 = new user("kinan");
let user2 = user("ahmed");
console.log(user.prototype);
console.log(user1);
let myArr = [1,2,3,4]; */

// -18-
// Class Syntax And Introduction:

/* class user {
    constructor(name, email) {
        this.name = name;
        this.email = email; 
    }
    sayHello(){
        return `Hello ${this.name}`;
    }
    showEmail(){
        return `Your Email Is: ${this.email}`;
    }
}

let user1 = new user("kinan","kinanashkar2@gmail.com");
let user2 = new user("ahmed","ahmed@live.com");

console.log(user1);
console.log(user2); */

// -19-
// Class Static Properties And Methods:

/* class user {
    // Static Properties
    static counter = 0;
    constructor(name,email){
        this.name = name;
        this.email = email;
        user.counter++;
    }
    sayHello(){
        return `Hello ${this.name}`;
    }
    showEmail(){
        return `Your Email Is ${this.email}`;
    }
    // Static Methods
    static countObjects = function() {
        return `${this.counter} Objects Created`;
    }
}
let user1 = New user("kinan","kinan@live");
let user2 = New user("kinan","kinan@live");
let user3 = New user("kinan","kinan@live");
let user4 = New user("kinan","kinan@live"); // 4 Objects Created.

// let user2 = user("ahmed","ahmed@live"); // Type Error: Class Constructor User

console.log(typeof user); // Function
console.log(user === user.prototype.constructor); // True
console.log(user.countObjects());
*/

// -20-
// Class Inheritance:

/* class user { // Parent Class               
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    sayHello(){
        return `Hello ${this.name}`;
    }
    showEmail(){
        return `Your Email Is: ${this.email}`;
    }
    writeMsg(){
        return `Message From Parent Class`;
    }
}
class admin extends user{ // Child Class
    constructor(name,email){
        super (name,email); // Return Parent Constructor, Access All Properties
    }
    adminMsg(){
        return `Your Are Admin`;
    }
    writeMsg(){ // Message Overwrite
        return `Message From Child Class`;
    }
}

let admin1 = new admin("samer","samer@hotmail.com"); */