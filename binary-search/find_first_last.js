/* Masthan Swamy */

function searchRange(arr, target){
    let res = [];
    res[0] = findFirst(arr, target);
    res[1] = findLast(arr, target);
    return res;
}
function findFirst(arr, target){
    let start = 0;
    let end = arr.length-1;
    let idx = -1;
    while(start<=end){
        let mid = parseInt((start+end)/2);

        if(arr[mid] >= target){
            end = mid-1;
        } else {
            start = mid + 1;
        }

        if(arr[mid] == target){
            idx = mid;
        }
    }
    return idx;
}

function findLast(arr, target){
    let start = 0;
    let end = arr.length-1;
    let idx = -1;
    while(start<=end){
        let mid = parseInt((start+end)/2);

        if(arr[mid] <= target){
            start = mid+1;
        }else{
            end = mid-1;
        }

        if(arr[mid] == target){
            idx = mid;
        }
    }
    return idx;
}

let arr = [5,7,8,8,8,8,10];
let target = 8;

console.log(searchRange(arr, target));