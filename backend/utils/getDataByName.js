const { readData, writeData } = require('./data/cards.json')
const getDataByName = async (req, res) => {
    const searchName = req.body
    const data = await readData()
    const obj = data[0]
    for (let key in obj){
        console.log(obj.key)
    }
}
module.exports = { getDataByName }