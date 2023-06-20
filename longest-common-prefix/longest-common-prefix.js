/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((acc, curr) => {
        while (curr.slice(0, acc.length) !== acc) {
            acc = acc.slice(0, acc.length - 1)
        }
        return acc;
    })
};