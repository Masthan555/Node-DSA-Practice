/* Masthan Swamy */

let easyTask = (x, m1, m2)=>{
    // For First Print
    let ans = 0;
    ans += Math.min(m1, m2);
    
    // Build Search Space
    let start = ans;
    let end = x*(Math.max(m1, m2));
    let res = 0;
    x--;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        let sum = Math.floor(mid/m1) + Math.floor(mid/m2);

        if(sum < x){
            start = mid + 1;
        }else if(sum >= x){
            res = mid;
            end = mid-1;
        }
        console.log(mid, sum, res, ans);
    }

    return ans+res;
}

let x = 2;
let m1 = 1;
let m2 = 10;
console.log(easyTask(x, m1, m2));