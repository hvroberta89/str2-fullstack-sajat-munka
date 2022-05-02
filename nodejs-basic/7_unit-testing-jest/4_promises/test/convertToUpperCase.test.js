const { resolveSoa } = require('dns')
const convertToUpperCase = require('../src/convertToUpperCase')

describe('convertToUpperCase', () => {

  // vagy then() catch() hívásokat használok
  test('"test" should be "TEST"', () => {
    return convertToUpperCase('test')
      .then(str => {
        expect(str).toBe('TEST')
      })
  })

  test('give a TypeError if parameter is not a string', () => {
    return convertToUpperCase(10)
      .catch(err => {
        //toEqual segítségével össze tudunk objecteket hasonlítani
        expect(err).toEqual(TypeError())
      })
  })

  // vagy resolves/rejects kulcsszavak használatával 
  test('"test" should be "TEST"', async () => {
    await expect(convertToUpperCase('test')).resolves.toBe('TEST')
  })

  test('give a TypeError if parameter is not a string', async () => {
    await expect(convertToUpperCase(10)).rejects.toEqual(TypeError())
  })
})