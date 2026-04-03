/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = new Array(height.length)
    let right = new Array(height.length)
    let maxleft = height[0] , maxright = height[height.length-1]
    left[0] = maxleft   , right[right.length-1] = maxright
    for(let i = 1; i<height.length;i++){
        maxleft = Math.max(height[i],maxleft)
        left[i] = maxleft
    }
     for(let i = height.length-2;i>=0;i--){
        maxright = Math.max(height[i],maxright)
        right[i]  = maxright
     }
     let ans = 0;
     for(let i = 0;i<height.length;i++){
        ans += Math.min(left[i],right[i])-height[i]
     }
     return ans
};