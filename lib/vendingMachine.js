// const transactionFunctions = require('./Transaction-functions');
class VendingMachine {
    constructor(inventory, cash) {
        //use a hack to clone constructor parameters
        this.inventory = JSON.parse(JSON.stringify(inventory));
        this.cash = JSON.parse(JSON.stringify(cash));
    }
    getInventory() {
        return this.inventory;
    }
    refillInventory(refilledInventory) {
        refilledInventory.forEach((refilledProduct) => {
            const foundProduct = this.inventory.find((currentProduct) => {
                return currentProduct.product === refilledProduct.product;

            });
            if (foundProduct) {
                foundProduct.quantity += refilledProduct.quantity;
            }
        });
    }
    resupplyChange(refilledChange) {
        refilledChange.forEach((refilledChange) => {
            const foundChange = this.cash.find((currentChange) => {
                return currentChange.name === refilledChange.name;
            });
            if (foundChange) {
                foundChange.quantity += refilledChange.quantity;
            }
        })
    };
    sumCoins(coins) {
        let total = 0;
        coins.forEach((coin) => total += coin.value);
        return total;
    }
    dispenseProduct(productName, coinsTendered) {
        const foundProduct = this.inventory.find((currentProduct) => {
            return currentProduct.product === productName;
        });
       // const totalCoinsTendered = this.sumCoins(coinsTendered);
        console.log('foundProductName:', foundProduct);
        if (foundProduct === undefined) {
            return false;
        } else if (foundProduct.quantity < 1) {
            return false;
        } else if (foundProduct.price) {
            return false;
        } 
    }
};
module.exports = VendingMachine;
