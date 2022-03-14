/* Masthan Swamy */

let unique = (arr)=>{
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] == arr[mid+1]){
            mid += 1;   
        }
        if(mid%2 != 0){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return arr[start];
}

let arr = [9, 9, 13, 13, 0, 16, 16, 18, 18];
console.log(unique(arr));