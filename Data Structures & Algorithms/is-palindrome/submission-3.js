class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (typeof s !== "string") {
      throw new Error("Input is not a string!");
    }
 
    	 const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  		const reversed = cleaned.split("").reverse().join("");

    	  return cleaned === reversed;
    }
}
