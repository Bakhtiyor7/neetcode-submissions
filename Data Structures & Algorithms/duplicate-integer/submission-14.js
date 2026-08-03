class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length === 0) {
            return false;
        }
        let seen = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true;
            } 
            seen.add(nums[i])
        }
        return false;
    }
}
