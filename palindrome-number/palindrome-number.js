/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let array = x.toString().split('')
let left = 0
let right = array.length-1
while(left<right){
    if(array[left]!==array[right]){
        return false
    }
    left++
    right--
}
return true
    };