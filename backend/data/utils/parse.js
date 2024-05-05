const fs = require('fs').promises
const readData = async (url) => {
    try{
        const result = await fs.readFile(url, "utf8")
        const data = JSON.parse(result)
        return data
    }catch(err){
        console.log(err)
    }
}
const writeData = async (url, data) => {
    const jsonData = JSON.stringify(data)
    await fs.writeFile(url, jsonData)
}
module.exports = {readData, writeData}