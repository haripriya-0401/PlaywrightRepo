import {Payment} from './interface'

abstract class basepayment implements Payment{
    pay(amount: number): void{
        console.log(amount,"amount paid")
    }
}
class UPI extends basepayment{
   pay():number{
        return 5
   }
}
class CreditCard extends basepayment {
pay():number{
        return 7
   }
}
class NetBanking extends basepayment{
pay():number{
        return 10
   }
}

let payyy = new UPI
console.log(payyy.pay())