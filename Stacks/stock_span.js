/* Masthan 00000 */

const {Stack} = require("./implementation");

let stockSpan = (arr)=>{
    // In first loop note indexes of prev greater elements
    let stack = new Stack();
    let n  = arr.length;
    for(let i=n-1; i>=0; i--){
        while(!stack.isEmpty() && arr[stack.peek()]<arr[i]){
            arr[stack.pop()] = i;
        }
        stack.push(i);
    }
    while(!stack.isEmpty()){
        arr[stack.pop()] = -1;
    }

    // Now place previous greater indexes by looping on array
    for(let i=0; i<n; i++){
        arr[i] = i - arr[i];
    }

    return arr;
}

let arr = [20, 80, 50, 48, 30, 79, 22]//[100, 80, 60, 70, 60, 75, 85]//[31, 27, 14, 21, 30, 22];
console.log(stockSpan(arr));