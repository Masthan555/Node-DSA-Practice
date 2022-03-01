/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// First we will get sum from Right subtree and then update root then update left subtree from root
// Here, we will do Reverse In-Order Traversal
let sum = 0;
greaterTree = (root)=>{
    if(!root) return 0;
    
    greaterTree(root.right);
    sum += root.data;
    root.data = sum;
    greaterTree(root.left);
}

inOrder = (root)=>{
    if(root == null) return;

    inOrder(root.left);
    process.stdout.write(root.data + " ");
    inOrder(root.right);
}

let root = new Node(4);
root.left = new Node(1);
root.right = new Node(6);
root.left.left = new Node(0);
root.left.right = new Node(2);
root.right.left = new Node(5);
root.right.right = new Node(7);
root.left.right.right = new Node(3);
root.right.right.right = new Node(8);

greaterTree(root);
inOrder(root);