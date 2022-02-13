/* Masthan Swamy */

// var findAnagrams = function(s, p) {
//     let sum = 0;
//     let alphabets = {};
//     // Give Alphabets counts
//     let abcs = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     alphabets['a'] = 1;
//     for(let i=1; i<=13; i++){
//         alphabets[abcs[i]] = alphabets[abcs[i-1]] + 26 + abcs[i].charCodeAt()-96;
//     }
//     for(let i=14; i<26; i++){
//         alphabets[abcs[i]] = alphabets[abcs[i-1]] + 52 + abcs[i].charCodeAt()-96;
//     }

//     // alphabets = {'a': 1,'b': 3,'c': 5, 'd': 7, 'e': 11, 'f': 13, 'g': 15, 'h': 17, 'i': 19, 'j': 21, 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

//     // return;
//     // calculate p sum
//     for(let i=0; i<p.length; i++){
//         sum += alphabets[p[i]];
//     }

//     // make prefix sum of s
//     let temp  = [];
//     temp.push(0);
//     for(let i=1; i<=s.length; i++){
//         temp[i] = alphabets[s[i-1]];
//     }
//     for(let i=1; i<temp.length; i++){
//         temp[i] = temp[i] + temp[i-1];
//     }

//     let i=0, j=i+p.length;
//     let res = [];
//     console.log(s, p, temp, alphabets, sum);
//     while(i<j && j<temp.length){
//         if(temp[j]-temp[i] == sum){
//             console.log(temp[j], temp[i], j, i);
//             res.push(i);
//         }
//         i++;
//         j++;
//     }

//     return res;
// };

var findAnagrams = function(mainString, subString) {
    const mainLength = mainString.length;
    const subLength = subString.length;
    const startIndicesOfAnagrams = [];
    const subStringCharacterCountObject = getCharacterCountObjectFromString(subString);
    const arrayOfKeys = Object.keys(subStringCharacterCountObject)
    const sliceCharacterCountObject = getCharacterCountObjectFromString(mainString.slice(0,subLength))

    for (let i = 0; i < mainLength ; i++){ 
        if (i + subLength > mainLength) break;
        let match = true;
        for (let i = 0; i < arrayOfKeys.length; i++){ 
            const char = arrayOfKeys[i];
            const countOne = subStringCharacterCountObject[char];
            const countTwo = sliceCharacterCountObject[char];
            if (countOne !== countTwo) {
                match = false;
                break
            }
        }
        
        
        if (match) startIndicesOfAnagrams.push(i);
        const oldStartingChar = mainString[i];
        const endIndexOfStringToCheck = i + subLength;
        const nextChar = mainString[endIndexOfStringToCheck];

        sliceCharacterCountObject[oldStartingChar]--;
        addToCount(nextChar,sliceCharacterCountObject)
        
    }
    return startIndicesOfAnagrams
};


function getCharacterCountObjectFromString(string){ 
    let object = {};
    const length = string.length;
    for (let i = 0; i < length; i++){
        const char = string[i];
        addToCount(char,object)
    }
    return object
}



function addToCount(character,characterCountObject){
    if (characterCountObject[character]){
            characterCountObject[character]++
            return
    }
    characterCountObject[character] = 1;
}


let s = "cbaebabacd";
let p = "abc";

// let s = "abab";
// let p = "ab";

// let s = "cbaebabccacd";
// let p = "abccc";

console.log(findAnagrams(s, p));