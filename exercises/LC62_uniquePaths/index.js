/* 
Problem link:
https://leetcode.com/problems/unique-paths/
*/

function uniquePaths(m, n) {
    const dpMatrix = [];

    for (let row = 1; row <= n; row++) {
        dpMatrix.push([]);
    }

    // fill out first row of dp matrix
    for (let row = 0; row < n; row++) {
        dpMatrix[row][0] = 1;
    }

    // fill out first col of dp matrix
    for (let col = 0; col < m; col++) {
        dpMatrix[0][col] = 1;
    }

    for (let row = 1; row < n; row++) {
        for (let col = 1; col < m; col++) {
            dpMatrix[row][col] =
                dpMatrix[row][col - 1] + dpMatrix[row - 1][col];
        }
    }

    let matrix = '';
    for (let i = 0; i < dpMatrix.length; i++) {
        for (let j = 0; j < dpMatrix[i].length; j++) {
            matrix += dpMatrix[i][j] + ' ';
        }
        console.log(matrix);
        matrix = '';
    }
    return dpMatrix[dpMatrix.length - 1][m - 1];
}

module.exports = uniquePaths;
