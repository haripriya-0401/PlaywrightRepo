let string = "Testleaf";
let rev = "";                                 //declare a empty string for rev variable
for(let i=string.length-1; i>=0 ; i--){         
    rev = rev + string[i]                          // for loop 
}
console.log(rev);                                 // print in reverse order