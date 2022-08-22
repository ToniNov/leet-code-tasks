// Valid Anagram
//
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
//
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
//
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
//
//
// Constraints:
//
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    for (let i = 0; i < s.length; i++) {
        let index = t.indexOf(s[i]);
        if (index === -1) {
            return false;
        }
        t = t.slice(0, index) + t.slice(index + 1);
    }
    return true;
};