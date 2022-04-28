const { readFile } = require('fs').promises

const readFileWrapper = async (file, options) => {
    const result = await readFile(file, options)
    console.log(result)
}

module.exports = readFileWrapper


// const fsp = require('fs').promises
// const readFileWrapper = async (file, options) => {
//     try {
//         const result = await fps.readFile(file, options)
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }