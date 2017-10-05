const { List } = require('../itsy-bitsy-data-structures.js')

describe('Creation and pushing 3 numbers', () => {
    var list = new List()
    list.push(4);
    list.push(1);
    list.push(6);
    test('New list is Created', () => {
        expect(list).toBeDefined();
    });
    test('New list memory is equal to 1', () => {
        const memoryLength = list.memory.length
        expect(memoryLength).toBe(3);
    });
    test('first address is correct', () => {
        firstMemoryAddressValue = list.get(0)
        expect(firstMemoryAddressValue).toBe(4)
    })
    test('last address is correct', () => {
        firstMemoryAddressValue = list.get(2)
        expect(firstMemoryAddressValue).toBe(6)
    })
})
// describe('shifting to a list with 3 number elements')