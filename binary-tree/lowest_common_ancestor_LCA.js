/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let ans = null;
let lca = (root, p, q)=>{
    if(!root)  return 0;

    let cur = 0;
    if(root.data == p || root.data == q){
        cur = 1;
    }else if(root.data == p && root.data == q){
        ans = root;
        return 0;
    }

    let leftVal = lca(root.left, p, q);
    let rightVal = lca(root.right, p, q);
    if((leftVal + rightVal) == 2 && ans == null){
        ans = root;
    }

    return (cur + leftVal + rightVal);
}

let root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.right.left = new Node(0);
root.right.right = new Node(8);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

let p = 2; 
let q = 4;
lca(root, p, q);
console.log(ans.data);