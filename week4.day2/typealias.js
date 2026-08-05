"use strict";
function makePayment(payments) {
    if (payments === 'UPI') {
        console.log("Payment used is:", payments);
    }
    else if (payments === 'CreditCard') {
        console.log("Payment is:", payments);
    }
    else if (payments === 'PayPal') {
        console.log("Payment used: ", payments);
    }
    else {
        console.log("Invalid payment");
    }
}
makePayment("UPI");
