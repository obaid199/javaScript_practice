// print below pattern
/*
  *
  **
  ***
  ****
  *****
 
*/

let str = "";
for(let i=1; i<=5; i++){
     for(j=1;j<=i;j++){
         str = str + "*";
     }
     str = str + "\n"
}
console.log(str)