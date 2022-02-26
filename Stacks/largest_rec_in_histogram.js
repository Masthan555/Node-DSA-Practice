/* Masthan Swamy */

// https://leetcode.com/problems/largest-rectangle-in-histogram/

const {Stack} = require("./implementation");

let prevSmaller = (arr)=>{
    let stack = new Stack();
    let res  = [...arr];
    for(let i=res.length-1; i>=0; i--){
        while(!stack.isEmpty() && res[i]<res[stack.peek()]){
            res[stack.pop()] = i+1;
        }
        stack.push(i);
    }
    while(!stack.isEmpty()){
        res[stack.pop()] = 0;
    }
    return res;
}

let nextSmaller = (arr)=>{
    let stack = new Stack();
    let res = [...arr];
    for(let i=0; i<res.length; i++){
        while(!stack.isEmpty() && res[i]<res[stack.peek()]){
            res[stack.pop()] = i;
        }
        stack.push(i);
    }
    while(!stack.isEmpty()){
        res[stack.pop()] = res.length;
    }
    return res;
}

let largestInHistogram = (arr)=>{
    let psi = prevSmaller(arr);
    let nsi = nextSmaller(arr);
    let ans = 0;
    for(let i=0; i<arr.length; i++){
        let rec = (nsi[i] - psi[i]) * arr[i];
        ans = Math.max(ans, rec);
    }
    return ans;
}

let arr = [2, 4];//[2,1,5,6,2,3];
console.log(largestInHistogram(arr));