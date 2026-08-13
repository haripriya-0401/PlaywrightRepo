abstract class Form{

//implemented methods
fill():void{
    console.log("Fill the form");
    
}
clear():void{
    console.log("Clear the drafts");
    
}

//unimplemented methods
abstract locator():void
abstract frame():void

}

class Details extends Form{

locator():void{
    console.log("Locator is enabled");
    
}

frame():void{
    console.log("frames are created");
    
}
}

let formdetails = new Details()
formdetails.clear()   //from Form (implemented in abstract class)
formdetails.fill()    //from Form (implemented in abstract class)
formdetails.frame()    //implemented in Details (concreate class)
formdetails.locator()  //implemented in Details (concreate class)
