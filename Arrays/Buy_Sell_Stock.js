/*

Problem: Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).


Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.


Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.


Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/*
 * @param {number[]} prices
 * @return {number}
 */

// ======================================================
// Attempt One

/* 
Notes:
    To get the day, it's index + 1

Pseudocode:

    Variable to check if we're buying
    Variable to check if we're selling
    Variable to hold onto the lowest selling day
    Variable to hold onto the highest selling day

    
*/
var maxProfit = function(prices) {
    let buying = true;
    let selling = false;
    let low = Math.min(...prices);
    let high = Math.max(...prices);

    return high - low;
};
// ======================================================
//  Attempt Two

/*
Pseudocode:

    Variable to keep track of whether or not we have a stock
    Variable to hold onto current day's price (in the beginning, the first day)
    Variable to hold onto the profit

    Loop through the array
        If we don't have a stock
            If tomorrow's price is greater than today's price
                "Buy" today's stock and set current to that stock
            
        Otherwise,
            if tomorrow's price is lower than today's price
            & today's price is greater than your current
                Increment the profit by today's stock - your current
                Sell your stock

        If we have a stock
            If the current day is greater than our current
                add onto the profit
        
        return the profit
    
*/

var maxProfit = function(prices) {
    let hasStock = false;
    let current = 0;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (!hasStock) {
            if (prices[i + 1] > prices[i]) {
                hasStock = true;
                current = prices[i];
            }
        } else if (prices[i + 1] < prices[i] && prices[i] > current) {
            profit += prices[i] - current;
            hasStock = false;
        }
    }
};

// ======================================================
// Attempt Three
// Peaks and Valleys approach (From the solutions provided by LeetCode)

/*
Pseudocode:
    Variable for holding a pointer
    Variable for holding a "valley", AKA a low buy point
    Variable for holding a "peak", AKA a high selling point
*/

var maxProfit = function(prices) {
    let i = 0;
    let valley = prices[0];
    let peak = prices[0];
    let maxProfit = 0;

    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] > prices[i + 1]) {
            i++;
        }

        valley = prices[i];

        while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
            i++;
        }

        peak = prices[i];
        maxProfit += peak - valley;
    }

    return maxProfit;
};
