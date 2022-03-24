/* Masthan Swamy */

let can_we_place_all_cows_in_stalls_using_d_dist = (stalls, d, cows)=>{
    let lastPlacedCow = stalls[0];
    let totalCowsPlaced = 1;


    for(let i=1; i<stalls.length; i++){
        let diff = stalls[i] - lastPlacedCow;
        if(diff>=d){
            lastPlacedCow = stalls[i];
            totalCowsPlaced++;
        }

        if(totalCowsPlaced == cows){
            return true;
        }
    }

    return false;
}
let place_cows = (stalls, cows)=>{
    let start = stalls[0];
    let end = stalls[stalls.length-1];

    let ans = NaN;
    stalls.sort((a, b)=> a-b);
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);

        if(can_we_place_all_cows_in_stalls_using_d_dist(stalls, mid, cows)){
            ans = mid;
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return ans;
}

let stalls = [1, 2, 8, 4, 9];
let cows = 3;

console.log(place_cows(stalls, cows));