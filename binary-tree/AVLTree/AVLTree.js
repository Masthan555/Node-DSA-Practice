/* Masthan Swamy */

class Node{
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
        this.height = 1;
    }
}

class AVL{
    constructor(){
        this.root = null;
    }

    height(node){
        if(!node) return 0;
        return (node.height);
    }

    balanceFactor(node){
        if(!node) return 0;
        return(this.height(node.left) - this.height(node.right));
    }

    rotateRight(x){
        let w = x.left;
        x.left = w.right;
        w.right = x;

        x.height = Math.max(this.height(x.left), this.height(x.right) + 1);
        w.height = Math.max(this.height(w.left), this.height(w.right) + 1);
        return x;
    }

    rotateLeft(x){
        let w = x.right;
        
    }
}