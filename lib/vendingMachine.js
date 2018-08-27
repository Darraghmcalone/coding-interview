class VendingMachine {
    constructor(products, cash) {
        this.products = products;
        this.cash = cash;
    }
    returnInventory() {
        return this.products;
    }

    restockItems({ name, quantity }) {
        if (this.products[name] === undefined || typeof quantity !== "number") {
            throw new Error('undefined');
        }
        return (this.products[name].quantity += quantity);
    }
};


module.exports = VendingMachine;
