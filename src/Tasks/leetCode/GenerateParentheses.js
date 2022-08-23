// Generate Parentheses
//
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
//
// Example 2:
// Input: n = 1
// Output: ["()"]
//
//
// Constraints:
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
export var generateParenthesis = function(n) {

    let res = [];

    function solve(remainingOpen, remainingClose, str) {
        if (remainingOpen === 0 && remainingClose === 0) {
            res.push(str);
            return;
        }

        if (remainingOpen > 0) {
            solve(remainingOpen - 1, remainingClose + 1, str + '(');
        }

        if (remainingClose > 0) {
            solve(remainingOpen, remainingClose - 1, str + ')');
        }
    }

    solve(n, 0, '');
    return res;
};