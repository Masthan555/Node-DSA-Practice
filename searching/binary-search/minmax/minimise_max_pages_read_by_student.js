/* Masthan Swamy */

let can_we_arrange_n_pages_to_all_students = (books, m, pages)=>{
    let arrangedStudents = 0;
    let sum = 0;
    for(let i=0; i<books.length; i++){
        sum += books[i];
        if(sum>pages){
            arrangedStudents++;
            sum = books[i];
        }
    }
    if(sum != 0)
        arrangedStudents++;

    // console.log("Students", arrangedStudents);
    if(arrangedStudents == m)
        return true;

    return false;
}

let arrangeBooks = (books, m)=>{
    let start = books[0];
    let end = 0;
    for(let i of books){
        end += i;
    }

    let ans = NaN;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);

        let flag = can_we_arrange_n_pages_to_all_students(books, m, mid);
        console.log(start, end, mid, ans, flag);
        if(flag){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
        // console.log(start, end, mid, ans, flag);
        // break;
    }

    return ans;
}

let books = [12, 34, 67, 90];
let m = 2;
console.log(arrangeBooks(books, m));