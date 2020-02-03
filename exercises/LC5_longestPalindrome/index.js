//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
    let start = 0;
    let maxLength = 1;

    function expandAroundMiddle(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentPalLength = right - left + 1;
            if (currentPalLength > maxLength) {
                maxLength = currentPalLength;
                start = left;
            }
            left -= 1;
            right += 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i, i + 1);
        expandAroundMiddle(i - 1, i + 1);
    }

    return s.slice(start, start + maxLength);
}

/* 
    Emphasize the importance of this question, study this.
    
    Technique: Expand around the center
*/

module.exports = longestPalindrome;
