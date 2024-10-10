 let xx  = 20 + 20;
 document.getElementById('datatypes').innerHTML = xx; 

 let x = 5;
 let y = 9;
 let z = 5;

 if (x==y){
    document.getElementById('boolean').innerHTML = "x == z"
 }

 if (x==z){
    document.getElementById('boolean').innerHTML = "x == z"
 }

 let myArray = ["item 1", "item 2", "item3"];
 document.getElementById('array').innerHTML = myArray[0];

 myArray[0] = "hello world";
 document.getElementById('changearray').innerHTML = myArray[0];
 document.getElementById('fullarray').innerHTML = myArray.join(" # ");

 function myFunction(p1, p2){
    return p1 * p2
 }