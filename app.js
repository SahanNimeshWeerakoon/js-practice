// 46: IIFEs and Safe Code
// (function(global, name) {
//     let greeting= 'Hello';
//     global.greeting = 'Hello';
//     console.log(greeting + ' ' + name);
// }(this, 'Sahan'));

// console.log(greeting);

/* enclosing IIFE inside () makes it isolate from the global code. */

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 47: Closures
// function greet(whattosay) {
//     return function (name) {
//         console.log(whattosay + ' ' + name);
//     }
// }

// let sayHi = greet('Hi ');
// sayHi('Sahan');
/* 
    After greet method called, its execution contest is removed,
    When sayHi is called, "whattosay" parameter is not found, so js search for the outer lexical environment
*/ 


// 48: Clouseres 2
// function buildFunctions() {
//     let arr = [];

//     for (var i=0; i<3; i++) {
//         arr.push(
//             function() {
//                 console.log(i);
//             }
//         );
//     }

//     return arr;
// }

// let fs = buildFunctions();  // On this the for loop finishes. in memory, i = 3;

// fs[0]();
// fs[1]();
// fs[2]();

// function buildFunctions2() {
//     let arr = [];

//     for (var i=0; i<3; i++) {
//         let j = i;  // This points to a new memory each time. And the memory for j is scoped inside the for loop
//         arr.push(
//             function() {
//                 console.log(j);
//             }
//         );
//     }

//     return arr;
// }

// let fs = buildFunctions2();

// fs[0]();
// fs[1]();
// fs[2]();

// If we want to do it without creating a new memory, we have to create an execution context on the array push.
// function buildFunctions3() {
//     let arr = [];

//     for (var i=0; i<3; i++) {
//         arr.push(
//             (function(j) {
//                 return function() {
//                     console.log(j);
//                 }
//             }(i))   // 
//         );
//     }

//     return arr;
// }

// let fs = buildFunctions3();  // On this the for loop finishes. in memory, i = 3;

// fs[0]();
// fs[1]();
// fs[2]();

// ========================================================================================================

// 50 - Closures and callbacks
// function sayHiLater() {
//     var greeting = "Hi";
    
//     setTimeout(function() {
//         console.log(greeting);  // greetings is out side of this functions' execution context scope
//     }, 3000);
// }

// sayHiLater();

// Callback Function = A function that is given to another functon to invoke, after it finishes
// Callback eg:
// function tellMeWhenDone(callback) {
//     let a = 100; // Some work
//     let b = 300; // More work

//     callback();
// }

// tellMeWhenDone(function() {
//     console.log('amo amo im done');
// });

// ==========================================================================================================

// 51 - call(), apply(), bind()

// let person = {
//     firstName: '',
//     lastName: '',
//     getFullName: function() {
//         let fullName = this.firstName + ' ' + this.lastName;
//         return fullName;
//     }
// }

// function logName(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('-------------------------');
// }

// let logPersonName = logName.bind(person); // bind makes a copy of logName function and set it to person objects property

// logPersonName('en');

// logName.call(person, 'en', 'esp');  // This doesnt create a copy of the function. but do the same as bind
// logName.apply(person, ['en', 'esp']);  // only diff between call and apply is apply's second argument is an array


// Function burrowing

// let person = {
//     firstName: 'amo',
//     lastName: 'hutto',
//     getFullName: function() {
//         let fullName = this.firstName + ' ' + this.lastName;
//         return fullName;
//     }
// }

// let person2 = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// }

// console.log(person.getFullName.apply(person2));


// Function currying
// function multiply(a,b) {
//     return a*b;
// }

// let multiplyByTwo = multiply.bind(this, 2);

// console.log(multiplyByTwo(5));


// =======================================================================================
// 52 - Functional programming
// function mapForEach(arr, fn) {
//     let newArr = [];
//     for (let i=0; i<arr.length; i++) {
//         newArr.push(
//             fn(arr[i])
//         );
//     }

//     return newArr;
// }

// let arr1 = [1,2,3];
// let arr2 = mapForEach(arr1, function(item) {
//     return item*2;
// });

// console.log({arr1, arr2});

// var checkPastLimit = function(limitter, item) {
//     return item > limitter;
// }

// let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

// console.log(arr4);

// let checkPastLimitSimplified = function(limitter) {
//     return function(limitter, item) {
//         return item > limitter;
//     }.bind(this, limitter);
// }

// let arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
// console.log(arr5);

// ===============================================================================
// 53 - Functional programming part 2
// underscore.js

// ===============================================================================
// 54 - Classical vs prototypal inheritance 
// Inheritance = One object gets access to the properties and methods of other objects
// Classical Inheritance = more u use it more complex it gets
// Prototypal Inheritance = flexible and simple
// ==============================================================================
// 55 - Understanding the prototype
// Prototype = all js objects has a property of prototype(another object)
            // - prototype object of a specific object has its own prototype. so theres a prototype chain.

let person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
}

// Never do this. For demo perpose only
john.__proto__ = person;

console.log(john.getFullName());    // this keyword in person refferes to john object here