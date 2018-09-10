const VendingMachine = require('./vendingMachine.js');
const mockInventory = require('../__mocks__/inventoryMock.js');
const mockCash = require('../__mocks__/cashMock.js');
let testVendingMachine;

describe('VendingMachine', () => {
    beforeEach(() => {
        testVendingMachine = new VendingMachine(mockInventory, mockCash);
    });
    describe('getInventory()', () => {
        it('should return inventory supplied', () => {
            const actualInventory = testVendingMachine.getInventory();
            expect(actualInventory).toEqual(mockInventory);
        });
    });

    describe('refillInventory()', () => {
        describe('when refilled inventory item exists', () => {
            it('should update inventory with new values', () => {
                const refilledItemZero = {
                    product: 'mars',
                    quantity: 500
                };
                const refilledInventory = [refilledItemZero];
                testVendingMachine.inventory[0].quantity -= 500;
                testVendingMachine.refillInventory(refilledInventory);
                const actualInventory = testVendingMachine.getInventory();
                expect(actualInventory).toEqual(mockInventory);
            });
        });
        describe('when refilled inventory item does not exist', () => {
            it('should not update inventory with new values', () => {
                const refilledItemZero = {
                    product: 'does not exist',
                    quantity: 500
                };
                const refilledInventory = [refilledItemZero];
                testVendingMachine.inventory[0].quantity -= 500;
                testVendingMachine.refillInventory(refilledInventory);
                const expectedItemZeroQuantity = mockInventory[0].quantity - 500;
                const actualItemZeroQuantity = testVendingMachine.inventory[0].quantity;
                expect(actualItemZeroQuantity).toEqual(expectedItemZeroQuantity);
            });
        });
    });
    describe('resupplyChange()', () => {
        describe('when resupplied change exists', () => {
            it('should update change with new values', () => {
                const refilledCoinZero = {
                    name: "five pence",
                    quantity: 50
                };
                const refilledChange = [refilledCoinZero];
                testVendingMachine.cash[0].quantity -= 50;
                testVendingMachine.resupplyChange(refilledChange)
                const actualChangeQuantity = testVendingMachine.cash;
                expect(actualChangeQuantity).toEqual(mockCash);
            })
        })
    });
    describe('when refilled change item does not exist', () => {
        it('should not update change with new values', () => {
            const refilledCoinZero = {
                product: 'does not exist',
                quantity: 500
            };
            const refilledChange = [refilledCoinZero];
            testVendingMachine.cash[0].quantity -= 50;
            testVendingMachine.resupplyChange(refilledChange);
            const expectedChangeZeroQuantity = mockCash[0].quantity - 50;
            const actualChangeZeroQuantity = testVendingMachine.cash[0].quantity;
            expect(actualChangeZeroQuantity).toEqual(expectedChangeZeroQuantity);
        });
    });

    describe('dispenseProduct()', () => {
        describe('when product name does not exist', () => {
            it('should return false', () => {
                const actualResult = testVendingMachine.dispenseProduct('does not exist');
                expect(actualResult).toEqual(false);
            });
        });
        describe('when product name exists', () => {
            describe('and product has insufficient quantity', () => {
                it('should return false', () => {
                    testVendingMachine.inventory[0].quantity = 0;
                    const testCoinsTendered = [{
                        name: 'one pound',
                        value: 1.00,
                    }];
                    const actualResult = testVendingMachine.dispenseProduct('mars', testCoinsTendered);
                    expect(actualResult).toEqual(false);
                });
            });
            describe('and product has sufficient quantity', () => {
                describe('and insufficient coins provided', () => {
                    it('should return false', () => {
                        
                    });
                })
                describe('and sufficient coins provided', () => {
                    it('should return true', () => {
                    });
                });
            });
        });
    });
})
