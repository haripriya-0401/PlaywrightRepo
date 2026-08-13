class Mathematics{
    //properties
    public addnum:number=1234
    private subnum:number=5678
    protected mulnum:number=9874

//methods - add, sub, mul
public add():number{
    return this.addnum
}

//accessing private member as public inside class and used get
public get subValue(): number {
    return this.subnum;
}

//accessing protected member
public get multiple():number{
    return this.mulnum
}
}

let maths = new Mathematics()

console.log(maths.add())
console.log(maths.subValue)
console.log(maths.multiple)