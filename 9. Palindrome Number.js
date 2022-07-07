// Directions 

/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/

// P: x
// R: check to see if palindrome 
// E: if "wow" === "wow" ; return true
// P: I need to be able to write a function that returns "true" if word is a palindrome, if not, then false. 

// Solution

/**
 * @param {number} x
 * @return {boolean}
 */
 let isPalindrome = function(x) {
    if( String(x) === String(x).split("").reverse().join("")) {
        return true
    } else {
        return false
    }
};