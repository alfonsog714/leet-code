/* 
    What is the runtime of the code below?
*/

function printUnorderedPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(`${array[i]}, ${array[j]}`);
        }
    }
}

/* 
    =========
    My answer
    =========
    The runtime for this function is O(n^2).

    ====================
    Answer from the book
    ====================
    Refer to page 46 (57 if on kindle) to read through the detailed answer the book provides.
*/
