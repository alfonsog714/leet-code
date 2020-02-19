/*
=======
Problem 
=======
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

=======
Example
=======
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

===========
Constraints
===========
You must do this in-place without making a copy of the array.
Minimize the total number of operations
 */

// Brute force solution I came up with
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === 0) {
                swap(nums, i, j);
            }
        }
    }

    return nums;
};
