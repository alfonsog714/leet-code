/* 
==========
Pseudocode
==========
- Sanitize input string by removing non alphanumeric characters and lowercasing it
- Create a left and right pointer, intially at start and end of input string
- While left less than right
    if characters at left and right pointer are not equal, return false
- return true
*/

function isPalindrome(s) {
    s = s.toLowerCase().replace(/[\W_]/g, '');
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

module.exports = isPalindrome;
