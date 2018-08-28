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
                //console.log('actualInventory:',actualInventory )
                //console.log('mockInventory:', mockInventory)
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
                console.log(expectedItemZeroQuantity)
                const actualItemZeroQuantity = testVendingMachine.inventory[0].quantity;
                console.log(actualItemZeroQuantity)
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
 });
    describe('dispenseInventory()', () => {
        describe('when product name does not exist', () => {
            it('should return false', () => {
                // TODO
            });
            describe('and product name exists', () => {
                it('should return true', () => {
                    //TODO
                });
            });
            describe('and product has insufficient quantity', () =>{
                it('should return false', () => {
                    //TODO
                })
            })
        });
    })
        /*
        when product name does not exist
        when product name exists
            and product has insufficient quantity
            and product has sufficient quantity
                and insufficient coins provided
                and sufficient coins provided
        */
    });
