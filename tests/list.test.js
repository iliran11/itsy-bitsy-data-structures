const { List } = require('../itsy-bitsy-data-structures.js')

describe('List Creation', () => {
    test('New list is Created', () => {
        var list = new List()
        expect(list).toBeDefined();
    });
    test('New list memory is empty', () => {
        memoryLength = new List().memory.length
        expect(memoryLength).toBe(0);
    });
})
