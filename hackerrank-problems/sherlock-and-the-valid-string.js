/* 
    =======
    Problem
    =======
    Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

    For example, if s = abc, it is a valid string because frequencies are {a:1, b:1, c:1}. So is s = abcc because we can remove one c and have 1 of each character in the remaining string. If s = abccc however, the string is not valid as we can only remove 1 occurrence of c. That would leave character frequencies of {a:1, b:1, c:2}.
*/

/* 
    ==========================
    Example Inputs and Outputs
    ==========================
    isValid('abc') returns YES because all of the frequencies of each letter are the same.
    isValid('aabbcd') returns NO because you'd have to remove more than one letter for all the frequencies to be the same.
    isValid('aabbccddeefghi') returns NO because you'd have to remove letters one too many times to make it a valid string.
*/

// Attempt One
const isValid = string => {
    string = string.toLowerCase();
    const frequencies = {};

    for (let char of string) {
        frequencies[char] = (frequencies[char] || 0) + 1;
    }

    let largestCount = -Infinity;
    for (let key in frequencies) {
        if (frequencies[key] > largestCount) {
            largestCount = key;
        }
    }

    frequencies[largestCount] -= 1;

    for (let key in frequencies) {
        if (frequencies[key] > frequencies[largestCount]) {
            console.log(frequencies);
            return 'NO';
        }
    }
    console.log(frequencies);
    return 'YES';
};

// Attempt Two
const isValid = string => {
    string = string.toLowerCase();
    const frequencies = {};

    for (let char of string) {
        frequencies[char] = (frequencies[char] || 0) + 1;
    }

    for (let key in frequencies) {
        if (frequencies[key] >= 3) {
            console.log(frequencies);
            return 'NO';
        }
    }
    console.log(frequencies);
    return 'YES';
};

// Third attempt
const isValid = string => {
    string = string.toLowerCase();
    const frequencies = {};

    for (let char of string) {
        frequencies[char] = (frequencies[char] || 0) + 1;
    }

    let largestCount = -Infinity;
    for (let key in frequencies) {
        if (frequencies[key] > largestCount) {
            console.log(
                `LINE 78: ${key} - ${frequencies[key]} : ${largestCount}`
            );
            largestCount = key;
        }
    }

    console.log(largestCount);
    console.log(frequencies);
};

// Fourth Attempt
const isValid = string => {
    string = string.toLowerCase();
    const frequencies = {};

    for (let char of string) {
        frequencies[char] = (frequencies[char] || 0) + 1;
    }

    let keys = Object.keys(frequencies);
    let largestCount = -Infinity;

    for (let key of keys) {
        if (
            frequencies[key] > largestCount ||
            frequencies[key] > frequencies[largestCount]
        ) {
            largestCount = key;
        }
    }

    frequencies[largestCount] -= 1;

    for (let key in frequencies) {
        if (frequencies[key] !== frequencies[largestCount]) {
            return 'NO';
        }
    }
    return 'YES';
};

// aaaabbcc
