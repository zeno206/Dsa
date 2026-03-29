/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit=0;
    min = prices[0]
    for(let i=0;i<prices.length;i++){
       if(prices[i]<min) min = prices[i]
       let profit = prices[i] - min
       maxprofit = Math.max(maxprofit,profit)
    }
    return maxprofit
};