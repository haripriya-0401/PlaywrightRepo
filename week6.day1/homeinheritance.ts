class WebComponent{

    selector:string;

    constructor (selector:string){
        this.selector = selector
    }

    public click():void{
        console.log(`click performed ${this.selector}`)
    }

    focus():void{
        console.log(`focusing on the component ${this.selector}`);
        
    }

}

class Button extends WebComponent{
    public click(): void {
        console.log(`Overrided click performed ${this.selector}`);
    }
}
class TextInput extends WebComponent{
    value:string =""

    enterText(text: string):void{
        this.value = text
        console.log(this.value)
    }
}
function testComponents():void{


let inhe = new Button('log')
let input = new TextInput('Hi')

inhe.click()
input.enterText('Hello')
input.focus();
}

testComponents()