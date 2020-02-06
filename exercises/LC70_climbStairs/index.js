// const climbStairs = n => {
//     if (n <= 3) return n;

//     let ways = [0, 1, 2, 3];

//     for (let i = 4; i <= n; i++) {
//         ways.push(ways[i - 1] + ways[i - 2]);
//     }

//     return ways.pop();
// };

// O(1) space complexity solution
const climbStairs = n => {
    if (n <= 1) return n;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        // 3, 4, 5, 6, 7
        const third = first + second; // 3, 5, 8, 13, 21
        first = second; // 2, 3, 5, 8, 13
        second = third; // 3, 5, 8, 13, 21
    }

    return second; //
};

module.exports = climbStairs;

/* 
This is essentially a fibonacchi sequence. There is a recursive solution to this as well.
*/
