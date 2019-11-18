/*
    Problem: Given an array, rotate the array to the right by k steps, where k is non-negative.

    Example 1:

    Input: [1,2,3,4,5,6,7] and k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:                  0 1 2 3 4 5 6  - watch the 7's index
    rotate 1 steps to the right: [7,1,2,3,4,5,6]  it was at the end, if we added one to the right, it's index would be 7
                                                   7-6=1, and it's now in the first spot

    rotate 2 steps to the right: [6,7,1,2,3,4,5]  it moved twice to the right, giving it 8. 8-6=2, and it's now at the seceond spot.

    rotate 3 steps to the right: [5,6,7,1,2,3,4] it moved three times to the right, giving it 9. 9-6=3, and now it's in the third spot.
                                                 
                                                 
    Example 2:

    Input: [-1,-100,3,99] and k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]

    Note:

    Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
    Could you do it in-place with O(1) extra space?
*/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
    Pseudocode:
        Create a new array variable
        Fill the new array with 0s
        Make a helper function to get each number's new index
        Place the number at the index given by the helper function
*/

// const newIndex = (length, ) => {

// }

// Attempt one
var rotate = function(nums, k) {
    if (k < 0) {
        return `${k} is a negative number. You can not pass in a negative number.`;
    }

    for (let i = 0; i < nums.length; i++) {
        if (i + k > nums.length) {
            nums[i + k - 1] = nums[i];
        } else {
            nums[i + k] = nums[i];
        }
    }
};

// Attempt Two (Looking at solutions)

/*
    Explanation:
        Algorithm

        We use an extra array in which we place every element of the array at its correct position i.e. the number at index ii in the original array is placed at the index (i+k)%(length of array)(i+k). Then, we copy the new array to the original one.

        Complexity Analysis

        Time complexity : O(n)O(n). One pass is used to put the numbers in the new array. And another pass to copy the new array to the original one.

        Space complexity : O(n)O(n). Another array of the same size is used.
*/

const rotate = (nums, k) => {
    let newArray = [];

    for (let i = 0; i < nums.length; i++) {
        newArray[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = newArray[i];
    }
};
