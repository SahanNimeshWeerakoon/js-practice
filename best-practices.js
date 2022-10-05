// Magic numbers = numbers we assign with no clear meaning
// const SECONDS_IN_A_DAY = 86400;

// for (let i=0; i<SECONDS_IN_A_DAY; i++) {
//     // do smt
// }

// Deep nesting
const exampleArr = [[['value']]];

function retrieveFinalElement(element) {
    if (Array.isArray(element)) {
        return retrieveFinalElement(element[0]);
    }
    return element;
}

retrieveFinalElement(exampleArr);