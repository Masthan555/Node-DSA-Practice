/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let distance = (root, p, q)=>{
    if(!root) return 0;
    let ans = 0;
    if(root.data == p || root.data == q){
        ans = 1;
    }

    let left = distance(root.left, p, q);
    let right = distance(root.right, p, q);
    if(left || right){
            
    }

    return ans ;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let p = 4, q = 7;
console.log(distance(root, p, q));