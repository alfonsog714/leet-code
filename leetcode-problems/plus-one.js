/* 
=======
Problem
=======
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

=========
Example 1
=========
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

=========
Example 2
=========
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

var plusOne = function(digits) {
    let carry = 1;
    let returnArray = [];
    for (let i = digits.length - 1; i >= 0; i--) {
        let added = digits[i] + carry;

        added === 10 ? (carry = 1) : (carry = 0);
        returnArray[i] = added % 10;
    }

    if (carry === 1) {
        returnArray = new Array(digits.length + 1).fill(0);
        returnArray[0] = 1;
    }

    return returnArray;
};
