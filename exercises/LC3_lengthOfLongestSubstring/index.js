// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// function lengthOfLongestSubstring(s) {
//     let stringCount = 1;
//     for (let i = 0; i < s.length; i++) {
//         let currentLetter = s[i];

//         for (let j = i + 1; j < s.length; j++) {
//             if (s[j] === currentLetter) return stringCount;

//             stringCount += 1;
//         }
//     }
// }

// Sliding Window approach
function lengthOfLongestSubstring(s) {
    const lettersMap = {};
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i];

        if (lettersMap[endChar] >= start) {
            start = lettersMap[endChar] + 1;
        }

        lettersMap[endChar] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

/* 
    - The window is created with the starting index, start, and the ending index, which is the i in the for-loop.
    - It's the sliding window approach because we conditionally move the beginning of the window as we iterate through the string.
*/
module.exports = lengthOfLongestSubstring;
