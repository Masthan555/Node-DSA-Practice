/* Masthan Swamy */

const {Queue} = require("../Queue/Queue");

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let res = [];
let bfs = (root, queue)=>{
    if(!root) return;

    if(root.left) queue.enque(root.left);
    if(root.right) queue.enque(root.right);

    let node = queue.deque();
    if(node)
        res.push(node.data);

    bfs(node, queue);
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(60);

let queue = new Queue();
// queue.enque(root);
res.push(root.data);
bfs(root, queue);
console.log(res);