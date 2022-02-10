/* Masthan Swamy */

var maxArea = function(height) {
    
    let i = 0, j = height.length-1;
    let max = 0;
    
    while(i<j){
        
        max = Math.max(max, Math.min(height[i], height[j])*(j-i));
        
        if(height[i]<height[j]){
            i++;
        }else{
            j--;
        }
        
    }
    return max;
    
};

let heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(heights));