/* Masthan Swamy */

const {Stack} = require("./implementation");

let prevSmaller = (arr)=>{
    let stack =  new Stack();
    let n = arr.length;
    for(let i=n-1; i>=0; i--){
        if(!stack.isEmpty()){
            while(arr[i] < arr[stack.peek()]){
                arr[stack.pop()] = arr[i];
            }
        }
        stack.push(i);
    }

    while(!stack.isEmpty()){
        arr[stack.pop()] = -1;
    }

    return arr;
}

let arr = [2, 7, 3, 5, 4, 6, 8];
console.log(prevSmaller(arr));