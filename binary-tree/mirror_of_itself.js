/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

mirror_itself = (a, b)=>{
    if(a == null && b == null){
        return true;
    }
    if(a == null || b == null){
        return false;
    }

    if(a.data == b.data){
        return(mirror_itself(a.left, b.right) && mirror_itself(a.right, b.left));
    }else{
        return false;
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(20);
root.left.left = new Node(32);
// root.right.right = new Node(31);
root.left.right = new Node(35);
root.right.left = new Node(35);

console.log(mirror_itself(root, root));