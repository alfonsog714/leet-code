/*
 * @param {number[]} nums
 * @return {number}
 */

// ======================================================

// First attempt

/*

    [0, 0, 0, 1]

    We're trying to remove any duplicate numbers in the array.
    
    Create a cache (dynamic approach)
    
    Loop through all the numbers
        If the current number is not in the cache, add it.
        else if the current number is in the cache already, delete it from the array
        else ...
    
    Return the length of the arr nums
*/

var removeDuplicates = function(nums) {
    const cache = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in cache) {
            nums.splice(i, i);
        } else {
            cache[nums[i]] = true;
        }
    }

    return nums.length;
};

// ======================================================

// Second attempt

/*

    [0, 0, 0, 1]

    We're trying to remove any duplicate numbers in the array.
    
    Create a cache (dynamic approach)
    
    Loop through all the numbers
        If the current number is not in the cache, add it.
        else if the current number is in the cache already, delete it from the array
        else ...
    
    Return the length of the arr nums
*/

var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === nums[i]) {
            nums.splice(i + 1, 1);
        } else if (nums[i - 1] === nums[i]) {
            nums.splice(i - 1, 1);
        }
    }

    return nums.length;
};

// ======================================================
// Third Attempt, first working solution. Very slow however.
/*

Have a pointer at the first number in the array
Create an empty array.
Loop through the nums array
    If the number is not in the array
        add it
    else
        skip

Clear the nums array
Make the nums array the new array

*/

var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
        }
    }

    nums.length = 0;
    for (num of arr) {
        nums.push(num);
    }
};
