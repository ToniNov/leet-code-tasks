/*
Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list.
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

    Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

export var mergeTwoLists = function (list1: any, list2: any) {

    // @ts-ignore
    const dummy = new ListNode(-Infinity);
    let previous = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            previous.next = list1
            previous = list1
            list1 = list1.next
        } else {
            previous.next = list2
            previous = list2
            list2 = list2.next
        }
    }

    if (!list1) previous.next = list2;
    if (!list2) previous.next = list1;

    return dummy.next;
};



