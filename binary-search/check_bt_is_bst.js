/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

checkBT = (root)=>{
    if(root == null) return;

    let flag = true;
    if(root.left){
        if(root.data >= root.left.data){
            flag = false;
        }
    }
    if(root.right){
        if(root.data <= root.right.data){
            flag = false;
        }
    }

    return flag && checkBT(root.left) && checkBT(root.right);
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