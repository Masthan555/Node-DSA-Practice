/* Masthan Swamy */

let ans = undefined;
let sqrt = (x, start, end)=>{
    if(start>end) return;

    let mid = Math.floor(start + (end-start)/2);
    if(mid*mid <= x){
        ans = mid;
        sqrt(x, mid+1, end);
    }else{
        sqrt(x, start, mid-1);
    }

    return ans;
}

let x = 50
let searchSpaceStart = 1;
let searchSpaceEnd = 50;
console.log(sqrt(x, searchSpaceStart, searchSpaceEnd));

