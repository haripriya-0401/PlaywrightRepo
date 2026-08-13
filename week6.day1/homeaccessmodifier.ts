class LoginTest{
    public browserName:string = "Chrome"
    private password:string = "admin123"
    protected userName:string = "tester"

public openApplication(){
console.log(this.browserName)

}
public login(){
console.log(this.userName)
console.log(this.password)
}
}

let newlogin = new LoginTest()
newlogin.openApplication()
newlogin.login()

//accessing private and protected variables outside class and observe errors
// console.log(this.userName)      // output - undefined
// console.log(this.password)      //output - undefined