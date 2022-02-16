/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let constructTree = (inorder, preorder)=>{
    let root = new Node();
    root.data = inorder[0];
    let temp = root;
    for(let i=1; i<inorder.length; i++){
        let j = i;
        if(inorder[i] == preorder[j-1]){
            temp.left = inorder[i];
            let right = inorder[++i];
            for(let k in preorder){
                if(preorder[k] == right){
                }
            }
        }else{
            temp.right = inorder[i];
        }
    }
}