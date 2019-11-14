/*
Questions given by my TL Will during Lambda X.

Exercise 2:
Write a function that find the frequency occurrence of a letter in a sentence. The function should return an integer. (Do not use the str.count() default python function)

Examples: find_frequency(“t”, “this is a test”) → 3 find_frequency(“y”, “this is a test”) → 0

Exercise 3:
Write a function that identifies if an integer is a power of 2. The function should return a boolean. Explain why your function will work for any integer inputs that it receives.

Examples: is_power_two(6) → false is_power_two(16) → trueZ
*/

/*
    Exercise 1: 
    
    Create a function that accepts a single array as an argument. Given an array of integers, x, sort x and split the integers into three smaller arrays of equal length. If the length of x is not evenly divisible by three, increase the size of the smaller arrays by one starting from the first array. The function should return an array of arrays.

    Example: 
    Input = [2,1,3,4,7,5,9,6,8,13,12,11,10,0,15,16,14] Output = [ [0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16] ]

    Pseudocode:

    Variable x is passed into the function, expecting it to be only integers.
    If something in the array is not a number
        return a string saying function only accepts numbers    
    
    If the array's length is 0
        return a string saying the array is empty
    
    Sort the array

    If the array's length is 3
        Return an array with each element in their own array

    Else if the array is greater than 3 and divisible by 3
        Loop through the array
            make an array and add i+1 and i+2 to it
    
    Else

*/

const divideArray = (x = []) => {
    if (x.some(isNaN)) {
        return `You can only have integers in the array.`;
    }

    if (x.length === 0) {
        return `Array is empty.`;
    }

    x.sort((a, b) => a > b);

    if (x.length === 3) {
        return [[x[0]], [x[1]], [x[2]]];
    } else if (x.length > 3 && x.length % 3 === 0) {
        let returnArray = [];
        for (let i = 0; i < x.length; i += 3) {
            let temp = [];
            temp.push(x[i]);
            temp.push(x[i + 1]);
            temp.push(x[i + 2]);
            returnArray.push(temp);
        }

        return returnArray;
    }
};
