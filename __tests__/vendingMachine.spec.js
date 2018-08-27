const cash = jest.setMock(
    'cash',
    require('../__mocks__/cash')
);
const products = jest.setMock(
    'products',
    require('../__mocks__/products')
);
const VendingMachine = require('../lib/vendingMachine');




describe('VendingMachine', () => {
    beforeEach(() => {
        
        results = new VendingMachine(products);
    });
    describe("inventory", () => {
        test("return inventory", () => {
          expect(products).toEqual(products);
        });
      });
    describe("restock", () => {
        test("invalid item is passed to the function", () => {
            const testProduct = {name: 'snickers', quantity: 1000 };
            expect(() =>  results.restockItems(testProduct)).toThrowError('undefined');
        
        });
       
    });
})