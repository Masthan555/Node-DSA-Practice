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
    let ans = 0;
    let n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<arr.length-1; j++){
            let sum = arr[i] + arr[j];
            ans += n - upper_bound(arr, sum);
        }
    }
    arr.sort((a, b)=>{
        return(a-b);
    });

    return ans;
}

let arr = [4, 2 ,10];
console.log(notTri(arr));
