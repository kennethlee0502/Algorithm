/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (let str of strs) {
        const key = str.split('').sort().join('');
        if(!map[key]){
            map[key] = [str];
        } else{
            map[key].push(str);
        }
    }
    return Object.values(map);
};