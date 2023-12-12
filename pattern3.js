/*
new pattern
    *
   **
  ***
 ****
*****   

*/

let row = "";
for(let i=1;i<5;i++){
    row = ""
    for(let j=1;j<5;j++){
        if(j<5-i){
            row = row + " ";
        }else{
            row = row + "*";
        }
    }
    
    console.log(row)
     
}
// console.log(row)