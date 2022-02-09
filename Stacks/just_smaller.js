/* Masthan Swamy */

const {Stack} = require("./implementation");

function justSmaller(arr){
    let stack = new Stack();
    let output = [];
    stack.push(0);
    for(let i=1; i<arr.length; i++){
        while(!stack.isEmpty() && arr[stack.peek()]>arr[i]){
            output[stack.peek()] = arr[i];
            stack.pop();
        }
        stack.push(i);
    }
    return output;
}

let arr = [2, 7, 3, 5, 4, 6, 8, 7, 0];
console.log(justSmaller(arr));
