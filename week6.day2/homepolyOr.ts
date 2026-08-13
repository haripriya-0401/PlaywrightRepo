class BasePage{
    findElement():void{
        console.log("founded the element")
    }
    clickElement():void{
        console.log("clicked the element")
    }
    enterText(text:string):void{
        console.log(text ,"text was entered")
    }
    performCommonTasks():void{
        console.log("task was completed")
    }
}
class LoginPage extends BasePage{
    performCommonTasks():void{
        console.log("overriden task was completed")
    }
}
let lpage = new LoginPage()

lpage.findElement()                 // inherited from BasePage
lpage.clickElement()                //inherited from BasePage
lpage.enterText("Welcome")          //inherited from BasePage
lpage.performCommonTasks()     // override from loginpage
