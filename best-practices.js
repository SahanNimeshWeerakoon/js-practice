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

const addMultiSubs = (a,b,c) => {
    // If a function have multiple functionalities, dnt do them inside same function. 
    // Break them to multiple functions
    // const addition = a + b + c;
    // const multiply = a * b * c;
    // const substract = a - b - c;

    const addition = add(a,b,c);
    const multiply = multiply(a,b,c);
    const substract = substract(a,b,c);
    
    return `${addition} ${multiply} ${substract}`;
}

const add = (a,b,c) =>  a + b + c;
const multiply = (a,b,c) => a * b * c;
const substract = (a,b,c) => a - b - c;

// ==============================================================


