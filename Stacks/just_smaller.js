/* Masthan Swamy */

const {Stack} = require("./implementation");

let nextSmaller = (arr)=>{
    let stack = new Stack();

    for(let i in arr){
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

// console.log(nextSmaller(arr)); // [0, 3, 0, 4, 0, 0, 7, 0, 0]
module.exports = {nextSmaller};