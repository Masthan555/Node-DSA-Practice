/* Masthan Swamy */

const {Queue} = require("./Queue");

// In this approach, max chard we can store in queue is 26, so Space Complexity is O(1)

let data = new Array(26).fill(0);
let queue = new Queue();
let nonRepeating = (char)=>{
    let index = char.charCodeAt()-97;
    if(data[index] < 1){
        queue.enque(char);
    }
    data[index]++;

    while(!queue.isEmpty() && data[queue.getFront().charCodeAt()-97] >= 2){
        queue.deque();
    }

    return (queue.isEmpty()?-1:queue.getFront());
}

let streamProcess = (str)=>{
    for(let c of str){
        console.log(nonRepeating(c));
    }
}

let str = "abadbdcff";//"abacacb";//"abab";
streamProcess(str);