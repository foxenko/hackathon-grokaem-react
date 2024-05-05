const fs = require('fs').promises
const readData = async () => {
    try{
        const result = await fs.readFile('./data/cards.json', "utf8")
        const data = JSON.parse(result)
        return data
    }catch(err){
        console.log(err)
    }
}
const writeData = async (data) => {
    const jsonData = JSON.stringify(data)
    await fs.writeFile('./data/cards.json', jsonData)
}
module.exports = {readData, writeData}