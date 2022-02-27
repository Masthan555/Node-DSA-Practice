/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

preOrder = (root)=>{
    if(root == null) return;

    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}

inOrder = (root)=>{
    if(root == null) return;

    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}

postOrder = (root)=>{
    if(root == null) return;
    
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}

height = (root)=>{
    if(!root) return -1;

    let left = height(root.left);
    let right = height(root.right);

    return(Math.max(left, right)+1);
}

maximum = (root)=>{
    if(!root) return 0;
    return(Math.max(root.data, maximum(root.left), maximum(root.right)));
}

/*
BFSTraversal = (root)=>{
    let arr = [];
    arr.push(root);
    while(arr.length != 0){
        let curr = arr.shift();
        console.log(curr.data);
        if(curr.left)
            arr.push(curr.left);
        if(curr.right)
            arr.push(curr.right);
    }
}

height = (root)=>{
    if(root == null) return -1;
    return(1+Math.max(height(root.left), height(root.right)));
}

maxElement = (root)=>{
    if(!root) return 0;
    else if(root.left == null && root.right == null) return root.data;
    return(Math.max(maxElement(root.left), maxElement(root.right)));
}

maxElement1 = (root)=>{
    if(!root) return 0;

    return(Math.max(maxElement1(root.left), maxElement1(root.right), root.data));
}*/

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(60);

preOrder(root);
console.log("----------------");
inOrder(root);
console.log("----------------");
postOrder(root);
console.log("----------------");
console.log(height(root));
console.log("----------------");
console.log(maximum(root));
// console.log(maxElement(root));
// console.log(maxElement1(root));
// console.log("----------------");
// console.log("BFS Traversal");
// BFSTraversal(root);