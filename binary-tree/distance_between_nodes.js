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
    if(!root) return 0;

    let curr = 0;
    if(root.data == p || root.data == q){
        curr = 1;
    }else if(root.data == p && root.data == q){
        ans = root.data;
        return;
    }

    let left = lca(root.left, p, q);
    let right = lca(root.right, p, q);

    if((left + right + curr) == 2 && ans == null){
        ans = root;
    }

    return (curr + left + right);
}
let findLevel = (root, x, lvl)=>{
    if(!root) return;

    if(root.data == x){
        return lvl;
    }

    return(findLevel(root.left, x, lvl+1) || findLevel(root.right, x, lvl+1));
}
let distance = (root, p, q)=>{
    // first find lca of given two nodes
    lca(root, p, q);
    if(ans !== null){
        return(findLevel(ans, p, 0) + findLevel(ans, q, 0));
    }else{
        console.log("Can't find nodes in the given tree");
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let p = 5, q = 2;
console.log(distance(root, p, q));