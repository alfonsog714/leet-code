/**
 * @param {number[]} nums
 * @return {number}
 */

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
