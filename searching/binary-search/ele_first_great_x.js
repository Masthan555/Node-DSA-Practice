/* Masthan Swamy */

let findX = (ele, arr)=>{
    let start = 0;
    let end = arr.length-1;
    
    while(start<=end){
        let mid = Math.floor((end+start)/2);
        if(arr[mid]<x){
            start = mid+1;
        }else if(arr[mid]>x){
            end = mid-1;
        }else if(arr[mid-1] == x){
            end = mid-1;
        }else{
            return mid;
        }
    }

    return NaN;
}

let x = 4;
let arr = [2, 3, 3, 4, 4, 4, 5, 6, 8];
console.log(findX(x, arr))