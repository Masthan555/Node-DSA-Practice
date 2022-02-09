/* Masthan Swamy */

function justGreater(arr){

    for(let i in arr){
        let j = Number(i)+1;
        while(arr[j]<arr[i]){
            j++;
        }
        // console.log(arr[i], arr[j], i, j);
        if(j>=arr.length)
            arr[i] = -1;
        else
            arr[i] = arr[j];
    }

    return arr;
}

let arr = [2, 7, 3, 5, 4, 6, 8];
console.log(justGreater(arr));