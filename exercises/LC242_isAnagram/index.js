function isAnagram(s, t) {
    const letters1 = {};
    const letters2 = {};

    if (s.length !== t.length) return false;

    for (let char of s) {
        if (!letters1[char]) {
            letters1[char] = 1;
        } else {
            letters1[char] += 1;
        }
    }

    for (let char of t) {
        if (!letters2[char]) {
            letters2[char] = 1;
        } else {
            letters2[char] += 1;
        }
    }

    for (let char of s) {
        if (!letters2[char]) {
            return false;
        } else if (letters1[char] !== letters2[char]) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;
