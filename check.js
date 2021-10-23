require("dotenv").config();
const ccxt = require ('ccxt')
// const exchange = new ccxt.binance()
// console.log (exchange.requiredCredentials) // prints required credentials
// exchange.checkRequiredCredentials()

const apiKey = process.env.API_KEY
console.log(apiKey);

const exchange = new ccxt.binance ({
    'apiKey': apiKey,
    'secret': process.env.API_SECRET
})

// const tick = (async () => {
//     console.log (await exchange.fetchBalance ())
//     console.log (await exchange.has ())
// })

console.log(exchange.fetchBalance ());
