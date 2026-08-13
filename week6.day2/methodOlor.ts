// import { from } from "node:stream/iter";

//Method Overloading
class TextBox{

fill(text: string):void
fill(text: string, locator: string):void

fill(text: string, locator?: string){
    if (locator){
        console.log("The locators are ", text ,",", locator );
        
    }else{
        console.log("Textbox is empty" , text);
        
    }
 }
}
let textb = new TextBox()
textb.fill("getbyrole", "placeholder")
textb.fill("Hello Empty")

//Method Overrriding
class Browser{
    browserVersion():void{
        console.log("The browser version is 1")
    }
}

class Chrome extends Browser{
browserVersion(): void {
    console.log("The updated browser version is 3")
    //super.browserVersion()       //calls method from child class
}
}

let browsers = new Chrome()
browsers.browserVersion()