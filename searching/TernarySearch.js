/* Masthan Swamy */

let count = 0;
let Ternary = (arr, start, end, x)=>{
    if(start>end) return NaN;

    let mid1 = Math.floor(start+(end - start)/3);
    let mid2 = (end - mid1)+start;

    // count++;
    // if(count>20) return NaN;
    // console.log(start, end, arr[mid1], arr[mid2]);

    if(arr[mid1] == x){
        return mid1+1;
    }else if(arr[mid2] == x){
        return mid2+1;
    }else if(arr[mid1] > x){
        return Ternary(arr, start, mid1-1, x);
    }else if(arr[mid1]<x && arr[mid2]>x){
        Ternary(arr, mid1+1, mid2-1, x);
    }else if(arr[mid1] < x && arr[mid2] < x){
        return Ternary(arr, mid2+1, end, x);
    }

    return NaN;
}

let arr = [1, 3, 5, 7, 9, 12, 15];
let n = arr.length-1;
console.log(Ternary(arr, 0, n, 5));