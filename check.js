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
const assetBalance = Math.floor(exchange.fetchBalance(), 2)
// const sellVolume = assetBalance * allocation;
// const buyVolume = (baseBalance * allocation) / marketPrice;
console.log(exchange.fetchBalance ());
console.log(assetBalance);
