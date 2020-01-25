/*
    What is the runtime of the code below?
 */

function printPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(`${array[i]}, ${array[j]}`);
        }
    }
}

/* 
    The runtime of the code above is O(n^2). The main giveaway for that is the nested for loop.

    ====================
    Answer from the book
    ====================
    The inner for loop has O(N) iterations and it is called N times. Therefore, the runtime is O(N^2).
    Another way we can see this is by inspecting what the "meaning" of the code is. It is printing all pairs (two-element sequences). There are O(N^2) pairs; therefore, the runtime is O(N^2).
*/
