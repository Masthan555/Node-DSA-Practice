/* Masthan Swamy */

let lowerBound = (arr, x)=>{
    let start = 0;
    let end = arr.length-1;
    
    let ans = undefined;
    while(start<=end){
        let mid = Math.floor(start + ((end-start)/2));
        
        if(arr[mid]>=x){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return ans;
}
let upperBound = (arr, x)=>{
    let start = 0;
    let end = arr.length-1;
    
    let ans = undefined;
    while(start<=end){
        let mid = Math.floor(start + ((end-start)/2));
        
        if(arr[mid]>x){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return ans;
}

let abcdef = (arr)=>{
    let lhs = [];
    let rhs = [];
    let n = arr.length;
    for(let a = 0; a<n; a++){
        for(let b = 0; b<n; b++){
            for(let c = 0; c<n; c++){
                lhs.push(arr[a]*arr[b]+arr[c]);
            }
        }
    }

    for(let d = 0; d<n; d++){
        if(arr[d] == 0) continue;
        for(let e = 0; e<n; e++){
            for(let f = 0; f<n; f++){
                rhs.push(arr[d]*(arr[e]+arr[f]));
            }
        }
    }
    // upto here n^3 + n^3 = 2(n^3) which is equivalent to n^3

    rhs.sort((a, b)=>{ return(a-b); });
    // here, n^3 + (n^3logn)

    let ans = 0;
    for(let i=0; i<lhs.length; i++){
        let lb = lowerBound(rhs, lhs[i]);
        let ub = upperBound(rhs, lhs[i]);

        ans += (ub-lb);
    }
    // Here, lhs have n^3 elements, lb is logn ub is logn which finally is logn
    // so, (n^3 logn) + (n^3 logn) which fially is (n^3 logn)
    return ans;
}

let arr = [2, 3];
console.log(abcdef(arr));