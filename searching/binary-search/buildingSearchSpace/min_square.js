/* Masthan Swamy */

let canWeFitAllRectangles = (square, w, h, n)=>{
    let widthFit = Math.floor(square/w);
    let heightFit = Math.floor(square/h);

    return ((widthFit*heightFit)>=n);
}

let square = (w, h, n)=>{
    let searchSpaceStart = 0;
    let searchSpaceEnd = Math.max(w, h)*n;

    let start = searchSpaceStart;
    let end = searchSpaceEnd;
    ans = NaN;
    while(start <= end){
        let mid = start + Math.floor((end-start)/2);
        if(canWeFitAllRectangles(mid, w, h, n)){
            ans = mid;
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return ans;
}

let w = 2;
let h = 3;
let n = 10;

console.log(square(w, h, n));