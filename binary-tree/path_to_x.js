/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let arr = [];
function pathToX(root, data){
    if(!root) return;

    if(root.data == data){
        console.log(data);
        return data;
    } 
    let x = pathToX(root.left, data);
    if(x)
        console.log(root.data);
    x =pathToX(root.right, data);
    if(x)
        console.log(root.data);

    return x;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let x = 5;
pathToX(root, x);