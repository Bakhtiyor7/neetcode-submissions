class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = s.split("");
        let tArr = t.split("");

        sArr.sort()
        tArr.sort()

        //early return to save time
        if (sArr.length !== tArr.length) {
            return false
        }

        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] !== tArr[i]) {
                return false
            }
        }
        return true

        // if same return true, else false
        
    }
}
