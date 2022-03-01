/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let preorderIndex = 0;
let search = (inorder, l, r, data)=>{
    for(let i=l; i<=r; i++){
        if(inorder[i] == data) return i;
    }
}
let constructTree = (inorder, preorder, l, r)=>{
    if(l>r) return null;

    let data = preorder[preorderIndex];
    let node = new Node(data);
    preorderIndex++;

    let inorderIndex = search(inorder, l, r, data);
    node.left  = constructTree(inorder, preorder, l, inorderIndex-1);
    node.right = constructTree(inorder, preorder, inorderIndex+1, r);

    return node;
}

let BFSTraversal = (root)=>{
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

let inorder = [9, 3, 20, 15, 7];
let preorder = [3, 9, 20, 15, 7];

let root = constructTree(inorder, preorder, 0, preorder.length-1);
BFSTraversal(root);