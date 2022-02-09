/* Masthan Swamy */

var findMin = function(nums) {
    
    let start = 0;
    let end = nums.length-1;
    
    while(start<=end){
        let mid = parseInt((start+end)/2);
        
        if(nums[end]<nums[start]){
            if(nums[mid]>=nums[start]){
                start = mid+1;
            }else{
                end = mid;
            }
        }else{
            return nums[start];
        }
    }  
};

let arr = [6,7,0,1,2,4,5];
console.log(findMin(arr));