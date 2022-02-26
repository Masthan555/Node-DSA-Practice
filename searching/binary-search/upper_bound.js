/* Masthan Swamy */

let upperBound = (x, arr)=>{
    let start = 0;
    let end = arr.length-1;

    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] < x){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

}