/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
const charCounts = {};
let oddCount = 0;

for(let i = 0; i < s.length; i++){
    const char = s.charAt(i);
    charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1
}
let longestPal = 0;
for (const count of Object.values(charCounts)){
    if(count % 2 === 0){
        longestPal += count;
    } else{
        longestPal += count - 1;
        oddCount ++
    }
}
if(oddCount > 0 ){
    longestPal ++
}

return longestPal;
};