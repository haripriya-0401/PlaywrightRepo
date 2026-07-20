let num=[56,78,90,23,90,76,43,56]           
for(let i=0; i<num.length; i++){
    for(j=i+1; j<num.length; j++){
        if(num[i]===num[j]){
            console.log(num[i])                                     //print duplicates
        }
    }
}