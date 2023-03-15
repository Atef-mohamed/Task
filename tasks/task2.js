// Task_2

let arrString=["apple","banana","pear","kiwi"];

function getLongestString(arrString) {
    let longestString ="";
    let lngth=0;
    for (let i = 0; i < arrString.length; i++) {
        if(arrString[i].length>lngth){
          lngth=arrString[i].length;
          longestString=arrString[i];
        } 
    }
    console.log(longestString);
}
getLongestString(arrString);

