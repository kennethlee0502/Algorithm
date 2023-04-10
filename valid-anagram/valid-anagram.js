/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
if(s.length !== t.length){
    return false
}
let frequency = {};
for(let char of s){
    frequency[char] = frequency[char] ? frequency[char] +1 : 1;
}
for (let char of t){
    if(!frequency[char]){
        return false
    }
    frequency[char] --
}
for ( let char in frequency){
    if(frequency[char]!== 0){
        return false
    }
}
return true
};