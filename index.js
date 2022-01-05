// brute force:
const searchInsert = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target || nums[i] > target) {
			return i;
		} else if (nums[i] < target && i == nums.length - 1) {
			return i + 1;
		}
	}
	return 0;
};

const searchInsertTwo = function (nums, target) {
	//binary search:
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let middle = Math.ceil((left + right) / 2);
		if (nums[middle] === target) return middle;
		else if (nums[middle] < target) {
			left = middle + 1;
		} else if (nums[middle] > target) {
			right = middle - 1;
		}
	}
};
