/* Masthan Swamy */

process.stdin.resume(); // Begin reading from stdin so the process does not exit.
process.stdin.setEncoding('utf-8'); // this will set allowed character set to be utf-8 
 
let inputString = ""; // this will store the complete input in stdin and we will later process the input
let currentLine = 0; // this will maintain the current line of input that we are considering
 
process.stdin.on('data', function (userInput) { // it will be executed when user gives an input
    inputString = inputString + userInput; // 
});
 
process.stdin.on('end', function() { // ctrl + d -> as soon as stdin stops taking input , the end event hits
    inputString.trim(); // remove the leading spaces
    inputString = inputString.split("\n"); // return an array of strings where each index stores each line of input
    main(); // main logic
});
 
function readline() { // read a new line input from the array
    let result = inputString[currentLine];
    currentLine = currentLine + 1;
    return result;
}

function processArray(arr) { // '1 2 3 4'
    let temp = arr.split(" "); // ['1', '2', '3', '4']
    let result = []; // new result array
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i])); // [] -> [1] -> [1,2] -> [1,2,3] -> [1,2,3,4]
     }
    return result; //[1,2,3,4]
}

let subsets = (arr, l, r, sum, temp)=>{
    if(l>=r){
        temp.push(sum);
        return;
    }

    subsets(arr, l+1, r, sum+arr[l], temp);
    subsets(arr, l+1, r, sum, temp);

    return temp;
}

let lowerBound = (arr, x)=>{
    let start = 0;
    let end = arr.length-1;
    
    let ans = 0;
    while(start<=end){
        let mid = Math.floor(start + ((end-start)/2));
        
        if(arr[mid]>=x){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return ans;
}
let upperBound = (arr, x)=>{
    let start = 0;
    let end = arr.length-1;
    
    let ans = arr.length;
    while(start<=end){
        let mid = Math.floor(start + ((end-start)/2));
        
        if(arr[mid]>x){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return ans;
}

let subsums = (arr, a, b)=>{
    let mid = Math.ceil(arr.length/2);
    let n = arr.length;
    let first = [];
    let second = [];
    // Find subsets for first half
    first = subsets(arr, 0, mid, 0, first);
    second = subsets(arr, mid, n, 0, second);

    first.sort((a, b)=>{ return(a-b); });
    second.sort((a, b)=>{ return(a-b); });

    let ans = 0;
    let l1 = lowerBound(first, a);
    let l2 = lowerBound(second, a);
    let u1 = upperBound(first, b);
    let u2 = upperBound(second, b);

    // console.log(first, second);
    // console.log(l1, l2, u1, u2);
    ans += u1 - l1;
    ans += u2 - l2;
    ans--; // For additional Zero
    for(let i=0; i<first.length; i++){
        let ub = upperBound(second, b-first[i])-1;
        // console.log(first[i], ub);
        ans += ub-l2;
    }

    return ans;
}

// let arr = [1, -2, 3];
// console.log(subsums(arr, -1, 2));

function main(){
    let inp = processArray(readline());
    let arr = [];
    for(let i=0; i<inp[0]; i++){
        arr.push(Number(readline()));
    }

    let res = subsums(arr, inp[1], inp[2]);
    process.stdout.write(res);
}