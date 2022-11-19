
import express from 'express'

const router = express.Router();
const { getProductsHandler, createProductHandler, deleteProductHandler, getProductHandler,updateProductHandler } = require('../controller/Product')

router.get("/", getProductsHandler);

router.get("/:id", getProductHandler)

router.post("/" , createProductHandler)

router.delete("/:id", deleteProductHandler)

router.put("/:id", updateProductHandler)

module.exports = router;
