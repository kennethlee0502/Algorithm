/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
if(!prices|| prices.length<2){
    return 0
}
let minPrice = prices[0];
let maxProfit = 0;

for(let i = 0;i<prices.length;i++){
    const currentPrice = prices[i];
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit)
    minPrice = Math.min(minPrice,currentPrice)
}
return maxProfit
};