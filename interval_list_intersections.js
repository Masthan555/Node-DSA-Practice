/* Masthan Swamy */

var intervalIntersection = function(firstList, secondList) {
      let i = 0, j = 0;

      let output = [];
      while(i<firstList.length && j<secondList.length){
        let temp = [];  
        // if(firstList[i][1] >= secondList[j][1]){
            if(secondList[j][0] >= firstList[i][0] && secondList[j][0] <= firstList[i][1]){
                temp[0] = secondList[j][0];
            }else if(secondList[j][1]<firstList[i][0]){
                j++;continue;
            }else{
                temp[0] = firstList[i][0];
            }
            if(secondList[j][1] >= firstList[i][0] && secondList[j][1] <= firstList[i][1]){
                temp[1] = secondList[j][1];
            }else if(firstList[i][1]<secondList[j][0]){
                i++;continue;
            }else{
                temp[1] = firstList[i][1];
            }

            output.push(temp);

            if(firstList[i][1] > secondList[j][1]){
                j++;
            }else if(firstList[i][1] < secondList[j][1]){
                i++;
            }else{
                i++; j++
            }
      }

      console.log(output);
      return output;
};

// let f1 = [[0,2],[5,10],[13,23],[24,25]];
// let f2 = [[1,5],[8,12],[15,24],[25,26]];

let f1 = [[0,4],[7,8],[12,19]];
let f2 = [[0,10],[14,15],[18,20]];
intervalIntersection(f1, f2);