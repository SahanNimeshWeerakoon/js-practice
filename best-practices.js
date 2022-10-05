// Magic numbers = numbers we assign with no clear meaning
// const SECONDS_IN_A_DAY = 86400;

// for (let i=0; i<SECONDS_IN_A_DAY; i++) {
//     // do smt
// }

// ============================================================

// Deep nesting
// const exampleArr = [[['value']]];

// function retrieveFinalElement(element) {
//     if (Array.isArray(element)) {
//         return retrieveFinalElement(element[0]);
//     }
//     return element;
// }

// retrieveFinalElement(exampleArr);

// ============================================================

// Stop writing comments - code must speak for it self

// ============================================================

// Avoid large functions

// const addMultiSubs = (a,b,c) => {
//     // If a function have multiple functionalities, dnt do them inside same function. 
//     // Break them to multiple functions
//     // const addition = a + b + c;
//     // const multiply = a * b * c;
//     // const substract = a - b - c;

//     const addition = add(a,b,c);
//     const multiply = multiply(a,b,c);
//     const substract = substract(a,b,c);
    
//     return `${addition} ${multiply} ${substract}`;
// }

// const add = (a,b,c) =>  a + b + c;
// const multiply = (a,b,c) => a * b * c;
// const substract = (a,b,c) => a - b - c;

// =============================================================

// Code repetition

// =============================================================

// Variable naming
// use meaning full names
// try to avoid long names
// consistent verb per concept
getUser;    // getUser
fetchPosts;  // getPosts
returnComments; // getComments

// For booleans use isACar, isAvailable

// ==============================================================
// Use nouns for a class name (Use PascalCase for class names)
class Car { // Correct
    //..
}
class MakeCar { // Incorrect
    //..
}

// ==============================================================
// use SNAKE_UPPER_CASE for constant names
const SECONDS_IN_A_DAY = 86400; // This is permanently a constant. So SNAKE_UPPER_CASE

const today = new Date();   // This changes over time. so camelCase

// ==============================================================
// Avoid one letter variable names. Dnt let yourself scroll to chech wtf this variable means