class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # brute force:
        for i in range(len(nums)):
            if (nums[i] == target or nums[i] > target):
                return i
            elif(nums[i] < target and i == len(nums) - 1):
                return i+1
