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

};


module.exports = VendingMachine;