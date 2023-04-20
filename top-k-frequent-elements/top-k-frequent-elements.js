/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
const map = {};
for(let num of nums){
    if(!map[num]){
        map[num] = 1;
    }else{
        map[num]++
    }
}
const frequentNums = Object.entries(map).sort((a,b)=>b[1]-a[1]).map(entry => parseInt(entry[0]))
return frequentNums.slice(0,k)
};