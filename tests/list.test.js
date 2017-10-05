const { List } = require('../itsy-bitsy-data-structures.js')
const { createList, randomInt } = require('./helpers.js')
debugger;
const n = 10
const randomNumber = randomInt(1, 100)

describe('List Tests', () => {
    test('New list has 0 length and empty memory', () => {
        const list = new List();
        expect(list.length).toBe(0);
        expect(list.memory.length).toBe(0);
    });
    test(`pushing numbers,extract them with get()`, () => {
        const { list, pushedNumbers } = createList(n)
        expect(list.length).toBe(n)
        expect(list.memory.length).toBe(n)
        expect(pushedNumbers).toEqual(list.memory)
        pushedNumbers.forEach((value, index) => {
            expect(list.get(index)).toBe(value)
        })
    });
    test('throw an error on illegal address rerieval', () => {
        const { list, pushedNumbers } = createList(n)
        expect(() => {
            list.get(-1)
        })
            .toThrow();
        /** if n=10, you should probably can get only 9 position of the list */
        expect(() => {
            list.get(n)
        })
            .toThrow()
    });
    test('pop a list', () => {
        const { list, pushedNumbers } = createList(n)
        list.pop();
        pushedNumbers.pop();
        expect(list.length).toBe(n - 1)
        expect(list.memory).toEqual(pushedNumbers)
    })
    test('unshift an element', () => {
        const { list, pushedNumbers } = createList(n)
        pushedNumbers.unshift(randomNumber)
        list.unshift(randomNumber)
        expect(list.memory).toEqual(pushedNumbers)
    })
    test('unshift an empty list', () => {
        list = new List();
        list.unshift(randomNumber);
        expect(list.memory).toEqual([randomNumber])
        expect(list.length).toBe(1)
    })
})