/* Masthan 00000 */

let lans = undefined;
let lowerbound = (arr, start, end, x)=>{
    if(start>end) return NaN;

    let mid = Math.floor((start+end)/2);
    if(arr[mid] >= x){
        lans = mid;
        lowerbound(arr, start, mid-1, x);
    }else{
        lowerbound(arr, mid+1, end, x);
    }
}

let rans = undefined;
let upperbound = (arr, start, end, x)=>{
    if(start>end) return NaN;

    let mid = Math.floor((start+end)/2);
    if(arr[mid] > x){
        rans = mid;
        upperbound(arr, start, mid-1, x);
    }else{
        upperbound(arr, mid+1, end, x);
    }
}

let larray = [2, 3, 4, 4, 5, 5, 5, 6, 8];
let rarray = [1, 2, 2, 3, 3, 4, 6, 7];
let lx = 5;
let rx = 3;
let ln = larray.length-1;
let rn = rarray.length-1;


lowerbound(larray, 0, ln, lx);
upperbound(rarray, 0, rn, rx);
console.log(lans, rans);