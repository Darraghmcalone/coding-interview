class VendingMachine {
    constructor(inventory, cash) {
        this.inventory = inventory;
        this.cash = cash;
    }
    getInventory() {
        return this.inventory;
    }
};

module.exports = VendingMachine;
