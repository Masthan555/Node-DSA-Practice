/* Masthan Swamy */

let search = (arr)=>{
    for(let i=1; i<arr.length; i+=2){
        if(arr[i] !== arr[i-1]){
            return arr[i-1];
        }
    }
    return NaN;
}

let arr = [5, 5, 9, 9, 13, 13, 16, 18, 18];
console.log(search(arr));