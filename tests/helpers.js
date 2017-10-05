const { List } = require('../itsy-bitsy-data-structures.js')
function RandomInt(min, max) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
function getArray(N) {
    const array = [...new Array(N)];
    return array.map(() => {
        return RandomInt(10, 100)
    })

}
module.exports = {
    createList(n) {
        const list = new List();
        const pushedNumbers = getArray(n)
        pushedNumbers.forEach((number) => {
            list.push(number)
        })
        return { list, pushedNumbers }
    }
};
