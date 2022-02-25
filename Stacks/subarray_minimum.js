/* Masthan Swamy */

const {Stack} = require("./implementation");

let prevSmaller = (arr)=>{
    let stack =  new Stack();
    let n = arr.length;
    let res = [...arr];
    for(let i=n-1; i>=0; i--){
        if(!stack.isEmpty()){
            while(res[i] < res[stack.peek()]){
                res[stack.pop()] = i;
            }
        }
        stack.push(i);
    }

    while(!stack.isEmpty()){
        res[stack.pop()] = -1;
    }

    return res;
}

let nextSmaller = (arr)=>{
    let stack = new Stack();
    let res = [...arr];
    for(let i=0; i<res.length; i++){
        while(!stack.isEmpty() && res[stack.peek()]>res[i]){
            res[stack.pop()] = i;
        }
        stack.push(i);
    }
    while(!stack.isEmpty()){
        res[stack.pop()] = res.length;
    }

    return res;
}

let subarray_minimum = (arr)=>{
    let psi = prevSmaller(arr);
    let nsi = nextSmaller(arr);

    console.log(psi);
    console.log(nsi);
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        // let j = i+1;
        let subarrays = (i-psi[i]) * (nsi[i]-i);

        // console.log(subarrays);
        sum += (subarrays * arr[i]);
    }

    return sum;
}

let arr = [3, 1, 2, 4];//[11, 81, 94, 43, 3];
console.log(subarray_minimum(arr));