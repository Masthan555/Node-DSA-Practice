/* Masthan Swamy */

const {Deque} = require("./Deque");

let maxOfKSubarray = (arr, k)=>{
    let n = arr.length;
    let queue = new Deque();
    let j = 0;
    let res = [];
    for(let i=0; i<n; i++){
        while(!queue.isEmpty() && queue.getRear()<arr[i]){
            queue.removeBack();
        }
        queue.addBack(arr[i]);
        j++;
        if(j==k){
            j--;
            res.push(queue.getFront());
            if(queue.getFront() == arr[i-k+1]){
                queue.removeFront();
            }
        }
    }

    return res;
}

let arr = [1, 2, 3, 1, 0, -1, 4, 5, 2, 3, 6];
console.log(maxOfKSubarray(arr, 3));