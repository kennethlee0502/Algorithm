/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
let map = new Map()
for(let i = 0; i < nums.length; i ++){
const minus = target - nums[i];
if(map.has(minus)){
    return [map.get(minus),i]
}
map.set(nums[i],i)
}
return []
}