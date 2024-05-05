const express = require("express");
const app = express();
const path = require("path");
const errorHandler = require("./middlewares/errorHandler");
const mainRoute = require("./routes/main");
const searchRoute = require("./routes/search");
const PORT = process.env.PORT || 3000;
const { readData, writeData } = require('./data/utils/parse')
async function getDataByName(req, res){
}
app.use(
  express.json(),
  errorHandler,
  express.static(path.join(__dirname, "public")),
  mainRoute,
  searchRoute,
);

app.listen(PORT, () =>
  console.log(`Сервер запущен на http://localhost:${PORT}`)
);
