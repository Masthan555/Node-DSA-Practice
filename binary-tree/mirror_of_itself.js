/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let mirrorItself = (lroot, rroot)=>{
    if(!lroot && !rroot){
        return true;
    }else if(!lroot || !rroot){
        return false;
    }

    if(lroot.data != rroot.data)
        return false;

    return(mirrorItself(lroot.left, rroot.right) && mirrorItself(lroot.right, rroot.left));
}
/*
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
}*/

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(20);
root.left.left = new Node(32);
root.right.right = new Node(32);
root.left.right = new Node(35);
root.right.left = new Node(35);
root.right.right.right = new Node(13);
root.left.left.left = new Node(14);

console.log(mirrorItself(root, root));