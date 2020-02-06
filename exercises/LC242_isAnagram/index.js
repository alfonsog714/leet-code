// First solution
// ===========================
// function isAnagram(s, t) {
//     const letters1 = {};
//     const letters2 = {};

//     if (s.length !== t.length) return false;

//     for (let char of s) {
//         if (!letters1[char]) {
//             letters1[char] = 1;
//         } else {
//             letters1[char] += 1;
//         }
//     }

//     for (let char of t) {
//         if (!letters2[char]) {
//             letters2[char] = 1;
//         } else {
//             letters2[char] += 1;
//         }
//     }

//     for (let char of s) {
//         if (!letters2[char]) {
//             return false;
//         } else if (letters1[char] !== letters2[char]) {
//             return false;
//         }
//     }

//     return true;
// }

function isAnagram(s, t) {
    const sCharCounts = {};

    // Fill sCharCounts
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
    }

    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];

        if (!sCharCounts[tChar]) return false;
        // 0 is a falsy value in JavaScript, so it covers the case when the key's value is 0 as well
        else {
            sCharCounts[tChar]--;
        }
    }

    return true;
}

module.exports = isAnagram;
