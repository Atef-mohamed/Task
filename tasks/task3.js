
// Task_3

let arrNum =[1,-2,3,4,-5];

function getSum(arrNum){
    let sum =0;
    for(let i = 0 ; i <arrNum.length; i++){
        if(arrNum[i]>0){
            sum+=arrNum[i];
        }else{
            continue;
        }
    }
    console.log(sum);
}
getSum(arrNum);