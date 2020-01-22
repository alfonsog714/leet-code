/* 
    What is the runtime of the below code?
*/

function foo(array) {
    let sum = 0;
    let product = 1;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }

    console.log(`${sum}, ${product}`);
}

/* 
    The runtime of this function would be O(n) because you would drop the 2 constant from 2n to make O(n)

    ================
    Answer from book
    ================
    "This will take O(N) time. The fact that we iterate through the array twice doesn't matter."
*/
