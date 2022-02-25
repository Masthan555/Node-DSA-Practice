/* Masthan Swamy */

var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length-1;
    
    while(start<=end){
        let mid = parseInt((start+end)/2);
        
        if(nums[mid] == target){
            return mid;
        }
        if(nums[mid] >= nums[start]){
            if(target<=nums[mid] && target>=nums[start]){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }else{
            if(target>=nums[mid] && target<=nums[end]){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
    }
    return -1;
};

let arr = [5, 1, 3];//[6,7,0,1,2,4,5];
let target = 0;
console.log(search(arr, target));