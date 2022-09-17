// 46: IIFEs and Safe Code
// (function(global, name) {
//     let greeting= 'Hello';
//     global.greeting = 'Hello';
//     console.log(greeting + ' ' + name);
// }(this, 'Sahan'));

// console.log(greeting);

/* enclosing IIFE inside () makes it isolate from the global code. */

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

