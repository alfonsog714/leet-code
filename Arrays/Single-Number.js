/*
    Problem:
        Given a non-empty array of integers, every element appears twice except for one. Find that single one.

    Note:

    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

    Example 1:

        Input: [2,2,1]
        Output: 1

    Example 2:

        Input: [4,1,2,1,2]
        Output: 4
*/

// Attempt one

/*
    Pseudocode:
        If the array's length is 0
            The array is empty, return an error
        
        Variable for indexing through the array
        Variable for increment, start at 1

        While index variable < array's length
            If the index + increment > array's length
                return the number at the current index
            
            if the number at the current index != number at the current index + the increment
                increment += 1
            else
                index += 1
                increment = 1

*/

var singleNumber = function(nums) {
    let pointer = 0;
    let increment = 1;

    while (pointer < nums.length) {
        if (pointer + increment > nums.length) {
            return nums[pointer];
        }

        if (nums[pointer] !== nums[pointer + increment]) {
            increment += 1;
        } else {
            pointer += 1;
            increment = 1;
        }
    }
};

// ===================================
// Attempt Two

/*
    Pseudocode:
        Nested for-loops
        
        Loop through the array
            Hold onto the current index, i
                Nest another loop inside
                    if nums[i] 
*/

// ==================================
// Looking at solutions
// I'll also be making my own remove method for arrays

// const arrayRemove = (arr, val) => {
//     return arr.filter(element => {
//         return element != val;
//     });
// };

const singleNumber = nums => {
    if (nums.length < 1) {
        return `The array is empty.`;
    }
    const list = [];

    for (let i = 0; i < nums.length; i++) {
        if (!list.includes(nums[i])) {
            list.push(nums[i]);
            console.log(`Added ${nums[i]} - ${list}`);
        } else {
            list.filter(num => {
                return num === nums[i];
            });
            console.log(`Removed ${nums[i]} - ${list}`);
        }
    }

    return list.pop();
};
