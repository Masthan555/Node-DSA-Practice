/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

greaterTree = (root, data)=>{
    if(root == null) return;

    if(root.left == null && root.right == null){
        return root.data;
    }

    if(root.left && root.data < root.left.data){
        root.data += greaterTree(root.left); 
        greaterTree(root.right);
    }else if(root.right && root.data < root.right.data){
        root.data += greaterTree(root.right);
        greaterTree(root.left);
    }else{
        if(root.data < data){
            root.data += data;
        }
    }

    return root.data;
}

inOrder = (root)=>{
    if(root == null) return;

    inOrder(root.left);
    console.log(root.data);
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