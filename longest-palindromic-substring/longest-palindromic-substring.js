/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    let longest = ''
    const dp = Array(n).fill(false).map(()=>Array(n).fill(false));

    for(let i = 0;i < n; i++){
        dp[i][i] = true;
        longest = s[i];
    }

    for(let i = 0;i < n-1;i++){
        if(s[i] === s[i+1]){
            dp[i][i+1] = true;
            longest = s.substring(i,i +2);
        }
    }

    for(let len = 3; len <= n; len++){
        for(let i = 0; i < n -len +1; i++){
            const j = i + len - 1;
            if(s[i]=== s[j] && dp[i+1][j-1]){
                dp[i][j] = true;
                longest = s.substring(i,j+1)
            }
        }
    }
    return longest;
};