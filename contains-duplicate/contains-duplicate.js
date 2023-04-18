/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {}
for(let char of nums){
    if(map[char]){
        return true
    } else{
        map[char] = 1
    }
} return false
};