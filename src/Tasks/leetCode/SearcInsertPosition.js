/*
Search Insert Position

Given a sorted array of distinct integers and a target value,
return the index if the target is found. If not,
return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

export var searchInsert = function (nums, target) {

    let start = 0;
    let end = nums.length - 1;

    if (target < nums[start]) return 0;
    if (target > nums[end]) return nums.length;

    while (start <= end) {
        let middle = (start + end) >> 1;
        if (target === nums[middle]) return middle;
        else if (target < nums[middle]) end = middle - 1;
        else start = middle + 1;
    }

    return start;
};
