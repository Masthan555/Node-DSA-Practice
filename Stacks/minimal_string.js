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
    minimalString(); // main logic
});

function readline() { // read a new line input from the array
    let result = inputString[currentLine];
    currentLine = currentLine + 1;
    return result;
}


let minimalString = ()=>{
    let s = readline();
    let t = "";
    let u = "";
    let better = [];
    better[s.length-1] = s[s.length-1];
    for(let i=s.length-2; i>=0; i--){
        if(s[i]>=better[i+1]){
            better[i] = better[i+1];
        }else{
            better[i] = s[i];
        }
    }

    for(let i=0; i<s.length; i++){
        let first = s[i];
        t += first;
        if(first <= better[i]){
            let last = t[t.length-1];
            t = t.slice(0, t.length-1);
            u += last;
        }
    }

    for(let i=t.length-1; i>=0; i--){
        u += t[i];
    }

    return u;
}

let s = "fdca";
console.log(minimalString(s));