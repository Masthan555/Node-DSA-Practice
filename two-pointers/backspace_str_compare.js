/* Masthan 00000 */

function getBackspacedSting(s){
    let j = s.length-1;
    
    let hashcount = 0;
    let str = "";
    while(j>=0){
        if(s[j] == '#'){
            hashcount++;
            j--;
        }else{
            while(hashcount != 0 && j>=0){
                if(s[j] == '#'){
                    hashcount++;
                    j--;

                }else{
                    hashcount--;
                    j--;
                    continue;
                }
            }
            if(j>=0 && s[j] != '#'){
                str = s[j] + str;   
                j--;
            }
        }
    }

    return str;
}

var backspaceCompare = function(s, t) {
    s = getBackspacedSting(s);
    t = getBackspacedSting(t);
    console.log(s, t);
    return(s == t);
};

let s = "#a#bc#"
let t = "aa##b"

console.log(backspaceCompare(s, t));