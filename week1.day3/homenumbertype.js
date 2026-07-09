function numberType(a){
if(a>0){
    console.log(a ,`- The number is POSITIVE`);
} else if(a==0){
    console.log( a ,"- The number is ZERO");
}else if(a<0){
    console.log(a ,"- The number is NEGATIVE");
}
}

numberType(-5);
numberType(6);
numberType(0);