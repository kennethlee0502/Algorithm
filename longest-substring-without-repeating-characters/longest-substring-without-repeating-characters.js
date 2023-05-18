/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const visited = new Map();
   let start = 0;
   let maxLen = 0;
   for(let i = 0; i < s.length; i++) {
       if(visited.has(s[i])) { 
           start = Math.max(visited.get(s[i]) + 1, start);
       }
       visited.set(s[i], i);
       maxLen = Math.max(i - start + 1, maxLen);
   };
   return maxLen;
};