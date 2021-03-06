/* 
=======
Problem
=======
- Group anagrams of a word into an array

============
Sub-problems
============
- remove words from the array so you don't duplicate them
- find a word to compare the others to to see if it is an anagram

==========
Pseudocode
==========

Create a hashmap with the word as the key and the anagrams of the key as the values
for every string in the array
    store it as a key in the hashmap
    for every word after
        checkIfAnagram
        if it is
            add it to values on hashmap
            slice it from the array
            decrement j by 1 so we don't skip anything
    
for now, print hashmap to see what it looks like
*/

// function groupAnagrams(strs) {
//     const anagrams = {};

//     for (let i = 0; i < strs.length; i++) {
//         let word = strs[i];
//         anagrams[word] = [word];
//         strs.slice(i, 1);

//         for (let j = 0; j < strs.length; j++) {
//             let secondWord = strs[j];
//             if (checkIfAnagram(word, secondWord)) {
//                 anagrams[word].push(secondWord);
//                 strs.slice(j, 1);
//                 j--;
//             }
//         }
//     }

//     console.log(anagrams);
// }

// function checkIfAnagram(string1, string2) {
//     const str1chars = {};
//     const str2chars = {};

//     for (let char of string1) {
//         if (str1chars[char]) {
//             str1chars[char] += 1;
//         } else {
//             str1chars[char] = 1;
//         }
//     }

//     for (let char of string2) {
//         if (str2chars[char]) {
//             str2chars[char] += 1;
//         } else {
//             str2chars[char] = 1;
//         }
//     }

//     for (key in str1chars) {
//         if (!str2chars[key]) {
//             return false;
//         } else if (str2chars[key] !== str1chars[key]) {
//             return false;
//         }
//     }
//     // console.log(str1chars);
//     // console.log(str2chars);
//     return true;
// }

function groupAnagrams(strs) {
    let grouped = {};

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word
            .split('')
            .sort()
            .join(''); // splits the word into an array of characters and then joins them in their alphabetized verision

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(word);
    }

    return Object.values(grouped);
}

module.exports = groupAnagrams;
