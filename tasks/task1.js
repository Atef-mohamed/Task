
// Task_1
function getMax(...arr){
    if(arr.length>=2){
            arr.sort();
            arr.reverse();
          console.log(arr.slice(0,2));
    }
    else{
        return null;
    }
 
}
getMax(5,2,9,8,7)


