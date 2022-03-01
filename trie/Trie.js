/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.isEndOfWord = false;
        this.children = {};
    }
}

class Trie{
    constructor(){
        this.root = new Node(null);
    }

    insert(str){
        let i=0;
        let temp = this.root;
        while(i<str.length){
            if(temp.children[str[i]]){
                temp = temp.children[str[i]];
            }else{
                temp.children[str[i]] = new Node(str[i]);
                temp = temp.children[str[i]];
            }
            i++;
        }
        temp.isEndOfWord = true;
    }

    search(str){
        let i=0;
        let temp = this.root;
        let res = [];
        let op = "";
        while(i<str.length){
            if(temp.children[str[i]]){
                temp = temp.children[str[i]];
            }else{
                return [];
            }

            if(i == str.length-1 && temp.isEndOfWord){
                res.push(str);
            }else if(i == str.length-1){
                let s = str.slice(0, i);
                // loop until end and add into res
                this.readStrings(temp, res, s);
            }
            i++;
        }

        return res;
    }

    readStrings(temp, arr, s){
        if(temp.isEndOfWord){
            arr.push(s + temp.data);
        }
        for(let key of Object.keys(temp.children)){
            this.readStrings(temp.children[key], arr, s + temp.data);
        }
    }
}

let trie = new Trie();
trie.insert("iphone1");
trie.insert("iphone2");
trie.insert("iphone3");
trie.insert("iphone1.1");
trie.insert("iphone1.2");
trie.insert("iphone2.2");

console.log(trie.search("iphone"));