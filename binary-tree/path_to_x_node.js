/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let arr = [];
function pathToX(root, data, res){
    if(!root) return;
    if(root.data == data){
        console.log(res + data);
        return;
    }
    pathToX(root.left, data, res+root.data+" ");
    pathToX(root.right, data, res+root.data+" ");
}

// Backtracking method
function pathToX1(root, data, arr){
    if(!root) return;

    arr.push(root.data);
    if(root.data == data){
        return true;
    }
    if(pathToX1(root.left, data, arr) || pathToX1(root.right, data, arr)){
        return true;
    }

    arr.pop();
    return false;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let x = 5;
pathToX(root, x, "");
console.log("***********");
let res = [];
pathToX1(root, x, res);
console.log(res);