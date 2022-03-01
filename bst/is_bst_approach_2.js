/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let isBst = (root, ll, ul)=>{
    if(!root) return true;

    if(root.data >= ll && root.data <= ul){
        return (isBst(root.left, ll, root.data-1) && isBst(root.right, root.data+1, ul));
    }else{
        return false;
    }
}

let root = new Node(3);
root.left = new Node(1);
root.right = new Node(6);
root.left.left = new Node(0);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);
root.left.right.left = new Node(0);
root.right.right.right = new Node(8);

console.log(isBst(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));