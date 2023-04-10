/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let left = 0
    let right = arr.length-1
    while (left < right){
        if(arr[left] !== arr[right]){
            return false
        }
        left ++
        right --
    }
    return true
};