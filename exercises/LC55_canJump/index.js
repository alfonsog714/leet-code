function canJump(nums) {
    let dpPositions = new Array(nums.length).fill(false); // creates another array the size of nums with false values
    dpPositions[0] = true; // sets the first value to true since you start off at that position

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (dpPositions[i] && i + nums[i] >= j) {
                dpPositions[j] = true;
                break;
            }
        }
    }

    return dpPositions[dpPositions.length - 1];
}

module.exports = canJump;
