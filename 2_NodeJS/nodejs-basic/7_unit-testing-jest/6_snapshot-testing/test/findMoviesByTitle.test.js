const findMoviesByTitle = require('../src/findMoviesByTitle')

test('findMoviesByTitle should be an array of movie objects', () => {
  // ha módosul az alap object, akkor a tesztet is módosítani kell a tesztet is
  // expect(findMoviesByTitle('F')).toEqual([{ title: 'Flipper', emoji: '🐬' }])
  // expect(findMoviesByTitle('F')).findMoviesByTitle()

  //vagy létrehozunk egy referencia állományt
  expect.addSnapshotSerializer({
    //megadjuk, hogy mit tesztelünk
    test: ({ title, emoji }) => title && emoji,
    //megadjuk, hogy mit szeretnénk beírni a fájlba
    print: ({ title, emoji }) => `${emoji} ${title}`
  })
  expect(findMoviesByTitle('F')).toMatchSnapshot()
})