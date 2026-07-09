let genderType = "male"
function printGender(){
    let variableColor ="Brown";
    if(genderType=="female"){
        var age = 30;
        let variableColor = "pink";
        console.log("Inside block", variableColor);
    }
    console.log("Outside block inside function", age);
}
printGender();
console.log("Globally", genderType);