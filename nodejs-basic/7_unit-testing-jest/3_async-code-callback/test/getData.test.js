const getData = require('../src/getData')

test('getData should be "Data"', (done) => {
  const callback = str => {
    expect(str).toBe('data')
    done()
  }
  getData(callback)
})