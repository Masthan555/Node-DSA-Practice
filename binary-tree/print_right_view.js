/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(60);

printRightView = (root)=>{
    let arr = [];
    arr.push(root);
    while(arr.length!=0){
        let temp = arr.shift();
        let flag = false;
        if(temp.left){
            arr.push(temp.left);
            flag = true;
        }
        if(temp.right){
            arr.push(temp.right);
            flag = true;
        }
        if(flag){
            arr.push(",");
        }
    }
}