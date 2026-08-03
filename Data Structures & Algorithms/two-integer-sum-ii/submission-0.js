class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
   twoSum(numbers, target) {
       // two pointer solution. space: o(1), time o(n)
        let l = 0, r = numbers.length - 1;

        for (let i = 0; i < numbers.length; i++) {
            while (l < r) {
                let curSum = numbers[l] + numbers[r];

                if(curSum > target) {
                    r--
                } else if (curSum < target) {
                    l++
                } else {
                          return [l + 1, r + 1]
                }
            }
        }

        return [];
    }
}
