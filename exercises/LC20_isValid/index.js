const isValid = s => {
    let stack = [];
    let pairs = { '(': ')', '{': '}', '[': ']' };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (pairs[char]) {
            // I first did this with "if(char in pairs)", but apparently that's much slower than this method
            stack.push(char);
        } else {
            const topOfStack = stack[stack.length - 1];
            char === pairs[topOfStack] ? stack.pop() : stack.push(char);
        }
    }

    return stack.length === 0;
};

/* 
    Technique: Make use to a stack data structure
    Time complexity: O(n)
*/

module.exports = isValid;
