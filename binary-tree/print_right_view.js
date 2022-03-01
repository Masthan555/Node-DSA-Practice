/* Masthan Swamy */

const {Queue} = require("../Queue/Queue");

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// using BFS - [ TC: O(n), SC: O(n) ]
printRightView = (root)=>{
    let queue = new Queue();
    let res = [];
    queue.enque(root);
    queue.enque(new Node(null));
    while(!queue.isEmpty()){
        let temp = queue.deque();
        if(temp.data != null){
            if(temp.left) queue.enque(temp.left);
            if(temp.right) queue.enque(temp.right);
            if(queue.getFront().data == null)
                res.push(temp.data);
        }else{ // when null occurs, it means previous level is completed
            if(!queue.isEmpty())
                queue.enque(new Node(null));
        }
    }

    return res;
}

let maxLevelVisited = -1;
let printRightViewOpt = (root, currentLevel)=>{
    if(!root) return;
    if(currentLevel>maxLevelVisited){
        maxLevelVisited = currentLevel;
        process.stdout.write(root.data + " ");
    }

    printRightViewOpt(root.right, currentLevel+1);
    printRightViewOpt(root.left, currentLevel+1);
}


let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(60);
root.right.right.right = new Node(70);
root.left.left.left = new Node(75);
root.left.left.left.left = new Node(85);


// console.log(printRightView(root));
printRightViewOpt(root, 0);