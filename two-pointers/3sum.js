/* Masthan Swamy */

var threeSum = function(nums) {
    
    nums.sort((a, b)=>{
        return(b-a);
    });
    
    let i=0;
    let res = [];
    while(i<nums.length-1){
        let j = i+1;
        let k = nums.length-1;
        
        while(j<k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum == 0){
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                while(nums[j-1] == nums[j])
                    j++;
            }else if(sum<0)
            k--;// j++;
            else
                j++;// j++;
        }
        i++;
        while(nums[i-1] == nums[i])
            i++;
    }
    
    // console.log(res);
    return(res);
    
};

let arr = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
console.log(threeSum(arr));