const generateItems = require('../src/generateItems')

test('generateItems call callback count of items times',() => {
  //ha a függvény kimeneti értéke nem szükséges
  //const mockCallback = jest.fn()
  const mockCallback = jest.fn(x => x * 2)
  const arr = [1, 2]
  const actual = generateItems(arr, mockCallback)
  const expected = [2, 4]
  //expect(actual).toEqual(expected)
  //azt vizsgálja, hogy a expect-nél lévő függvény meghívódott-e
  expect(mockCallback).toHaveBeenCalled()
  //azt vizsgálja, hogy a expect-nél lévő függvény hányszor hívódott meg
  expect(mockCallback).toHaveBeenCalledTimes(2)
  // amikor a mockCallback függvény először fut le, akkor az értéke 2
  expect(mockCallback.mock.results[0].value).toBe(2)
  // amikor a mockCallback függvény másodszor fut le, akkor az értéke 4
  expect(mockCallback.mock.results[1].value).toBe(4)
})