// Palindrome Linked List
//
// Given the head of a singly linked list, return true if it is a palindrome.
//
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
//
// Example 2:
// Input: head = [1,2]
// Output: false
//
//
// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
//
// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} head
 * @return {boolean}
 */

export var reverse = function (head) {
    let current = head;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

export var isPalindrome = function(head) {
    let oneStep = head;
    let twoStep = head;
    let startPointer = head;
    let length = 0;

    while (twoStep && twoStep.next) {
        twoStep = twoStep.next.next;
        oneStep = oneStep.next;
        length++;
    }

    let mid = reverse(oneStep)

    while (length) {
        length--;
        if(mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next
    }

    return true
};