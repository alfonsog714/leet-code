/* 
=======
Problem
=======
Given two arrays, write a function to compute their intersection.

=========
Example 1
=========
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

=========
Example 2
=========
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

*/
var intersect = function(nums1, nums2) {
    const hashMap = {};
    const arr = [];

    for (let num of nums1) {
        hashMap[num] = hashMap[num] + 1 || 1;
    }

    // console.log(hashMap)

    for (let num of nums2) {
        if (hashMap[num]) {
            if (hashMap[num] > 1) {
                hashMap[num]--;
            } else {
                delete hashMap[num];
            }

            arr.push(num);
            // console.log(arr);
        }
    }

    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    // console.log(hashMap)
    // console.log(arr);
    // console.log(result);
    return result;
};
