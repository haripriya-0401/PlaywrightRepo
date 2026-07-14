let s = ["Hello"," ","World"]    //Strings as arrays
console.log(s[2])                // print the index of 2
console.log(s[2].length)         //lprint the length of the index2

let s1 =" fly me  to  the moon "
let trimmed = s1.trim()                      //trim the spaces from start and end
console.log(trimmed)
console.log(trimmed.substring(16))            //print the substring 16
console.log(trimmed.substring(16).length)     // print the length of substring 16 

function isAnagram(s2,s3){
let splitteds2 = s2.split("").sort().join()   //split, sort and join the words
let splitteds3 = s3.split("").sort().join()

return splitteds2 === splitteds3;              //check strict equality comparison
}

console.log(isAnagram('listen', 'silent'))      // print boolean values comparing by strict equality
console.log(isAnagram('hello', 'world'))