/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let isBst = (root)=>{
    if(!root) return {min:Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER, isBst: true};

    let left = isBst(root.left);
    let right = isBst(root.right);

    let obj = {
        max: Math.max(right.max, left.max, root.data),
        min: Math.min(left.min, right.min, root.data),
        isBst: false
    };
    if(root.data >= left.max && root.data <= right.min && left.isBst && right.isBst){
        obj.isBst = true;
    }

    return obj;
}

let root = new Node(3);
root.left = new Node(1);
root.right = new Node(6);
root.left.left = new Node(-10);
root.left.right = new Node(2);
root.right.left = new Node(5);
root.right.right = new Node(7);
root.left.right.right = new Node(3);
root.right.right.right = new Node(8);

console.log(isBst(root));