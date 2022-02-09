/* Masthan Swamy */

var threeSum = function(nums) {
    nums.sort();

    console.log(nums);
    
    let i=0, j=1, k=nums.length-1;
    let res = [];
    while(j<k && i<k){
        let sum = nums[i] + nums[j] + nums[k];
        if(sum == 0){
            res.push([nums[i], nums[j], nums[k]]);
            while(nums[j] == nums[j+1])
                j++;
                k--;
                
        }else if(sum > 0){
            k--;
        }else if(sum < 0){
            if(j==k-1)
                i++;
            else
                j++;
        }
    }
    return res;
};

let arr = [3,0,-2,-1,1,2];
console.log(threeSum(arr));