// routes/searchRoutes.js

const searchRoute = require("express").Router();
const searchController = require("../controllers/searchController");

searchRoute.post("/search", searchController);

module.exports = searchRoute;
