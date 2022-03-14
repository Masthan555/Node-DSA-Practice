/* Masthan Swamy */


let upper_bound = (arr, val)=>{
    let start = 0;
    let end = arr.length-1;
    let ans = -1;
    while(start<=end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] > val){
            ans = mid;
            end = mid-1;
        }else{
            start = mid + 1;
        }
    }
    if(ans == -1) return arr.length;
    return ans;
}

let notTri = (arr)=>{
    arr.sort((a, b)=>{ return(a-b); });
    let n = arr.length;
    let ans = 0;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            let sum_ = arr[i] + arr[j];
            ans = ans + (n - upper_bound(arr, sum_));
        }
    }
    return ans;
}

let arr = [4, 2 ,9, 6];
console.log(notTri(arr));