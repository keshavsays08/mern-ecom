// import express and call or invoke router 
const express = require("express");
const router = express.Router();

// import controllers
const { getAllProducts } = require("../controllers/productController");

// route handlers
router.route("/products").get(getAllProducts)

//export router
module.exports = router;