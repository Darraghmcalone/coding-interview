const cash = require('../__mocks__/cash');
const inventory = require('../__mocks__/inventory');
const VendingMachine = require('./vendingMachine');
let testVendingMachine;

describe('VendingMachine', () => {
    beforeEach(() => {
        testVendingMachine = new VendingMachine(inventory, cash);
    });
    describe("getInventory()", () => {
        it("should return inventory supplied", () => {
            const results = testVendingMachine.getInventory();
            expect(results).toEqual(inventory);
        });
    })
})