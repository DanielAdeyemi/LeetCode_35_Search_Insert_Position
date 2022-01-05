class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # brute force:
        for i in range(len(nums)):
            if (nums[i] == target or nums[i] > target):
                return i
            elif(nums[i] < target and i == len(nums) - 1):
                return i+1


class SolutionTwo:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # binary search:
        left, right = 0, len(nums) - 1
        while(left <= right):
            middle = (left + right) // 2
            if (nums[middle] == target):
                return middle
            elif (nums[middle] > target):
                right = middle - 1
            else:
                left = middle + 1

        return left
