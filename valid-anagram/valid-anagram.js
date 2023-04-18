/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
if(s.length !== t.length){
    return false
}
let result = {}
for(let char of s){
    result[char] = result[char] ? result[char] + 1 : 1;
}
for(let char of t){
    if(!result[char]){
        return false
    } result[char] --
}
for(let char in result){
    if(result[char] !== 0){
        return false
    }
}
return true
};