/* Masthan Swamy */

const {Stack} = require("./implementation");

let prevSmaller = (arr)=>{
    let stack = new Stack();
    for(let i=arr.length-1; i>=0; i--){
        while(arr[i]<arr[stack.peek()] && !stack.isEmpty()){
            arr[stack.pop()] = arr[i];
        }
        stack.push(i);
    }

    while(!stack.isEmpty()){
        arr[stack.pop()] = -1;
    }

    return arr;
}

let arr = [2, 7, 3, 5, 4, 6, 8, 7, 1];
// console.log(prevSmaller(arr)); // [-1, 2, 2, 3, 3, 4, 6, 6, -1]

module.exports = {prevSmaller};