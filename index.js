// brute force:
var searchInsert = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target || nums[i] > target) {
			return i;
		} else if (nums[i] < target && i == nums.length - 1) {
			return i + 1;
		}
	}
	return 0;
};
