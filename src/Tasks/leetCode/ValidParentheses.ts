/*
Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']'
, determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

    Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

export var isValid = function (s:any) {

	const br = "(){}[]";

	const st = [];
	for (let i = 0; i < s.length; ++i) {
		let ch = s[i];
		let ind = br.indexOf(ch);
		if (ind >= 0) {
			if (ind & 1) {
				if (!st.length) return false;
				let last_br = st.pop();
				if (last_br !== br[ind - 1]) return false;
			} else {
				st.push(ch);
			}
		}
	}
	return !st.length;
};

