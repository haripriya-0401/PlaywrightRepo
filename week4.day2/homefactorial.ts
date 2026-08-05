function factorial(n:number):number{
    if(n<=0){
        console.log( n,' is a negative number and not allowed')
    }

    let result = 1

    for (let i =2; i<=n ; i++){
        result *= i
    }
    return result;
}
console.log('factorial is:',factorial(-5))