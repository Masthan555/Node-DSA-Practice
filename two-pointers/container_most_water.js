/* Masthan Swamy */

var maxArea = function(height) {
    let i=0, j=height.length-1;
    let maxWater = 0;
    
    while(i<j){
        let minCont = Math.min(height[i], height[j]);
        maxWater = Math.max(maxWater, minCont*(j-i));
        
        if(height[j-1]>height[i+1]){
            i++;
        }else{
            j--;
        }
    }

    console.log(maxWater);
    return maxWater;
};

let heights = [1,2,4,3];//[8,1,6,2,5,4,3,7,5];
maxArea(heights);