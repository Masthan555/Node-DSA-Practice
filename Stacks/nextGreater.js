/* Masthan Swamy */

let {Stack} = require("./implementation");

let nextGreater = (arr)=>{
    let stack = new Stack();
    for(let i in arr){
        if(!stack.isEmpty()){
            while(arr[i]>=arr[stack.peek()]){
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
console.log(nextGreater(arr));