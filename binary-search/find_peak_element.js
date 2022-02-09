/* Masthan 00000 */

function findPeak(arr, start, end){
    if(end-start < 2){
        return -1;
    }
    if(end-start == 2){
        if(arr[start+1]>arr[start] && arr[start+1]>arr[end]){
            return (start+1);
        }else{
            return -1;
        }
    }else{
        if(end-start >= 4){
            let mid = Math.floor((start+end)/2);
            if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
                return mid;
            let l1 = findPeak(arr, start, mid);
            let l2 = findPeak(arr, mid, end);
            if(l1 != -1){
                return l1;
            }else{
                return l2;
            }
        }else{
            let mid = Math.floor((start+end)/2);
            if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
                return mid;
            let l1 = findPeak(arr, start, mid+1);
            let l2 = findPeak(arr, mid, end);
            if(l1 != -1){
                return l1;
            }else{
                return l2;
            }
        }
        
    }
}

function findElement(nums){
    let n = nums.length;
    if(nums.length > 2){
        let idx = findPeak(nums, 0, nums.length-1);
        if(idx == -1){
            if(nums[0]>nums[1]){
                return 0;
            }else if(nums[n-1]>nums[n-2]){
                return(n-1);
            }
        }else{
            return idx;
        }
    }
    else if(nums.length == 2){
        if(nums[0] > nums[1])
            return 0;
        else
            return 1;
    }
    else
        return 0;
}
// [1,2,1,3,5,4,4]
// [1,2,3,2,1]
console.log(findElement([1,3,3,2,4,1])); //uncomment this to run our code


// seen in discussion form
function Helper(nums, low, high)
{
    if(low == high)
        return low;
    else
    {
        let mid1 = Math.floor((low+high)/2);
        let mid2 = mid1+1;
        if(nums[mid1] > nums[mid2])
            return Helper(nums, low, mid1);
        else
            return Helper(nums, mid2, high);
    }
}
let arr = [1,3,3,2,5,1];
console.log(Helper(arr, 0, arr.length-1));