import { Response, Request } from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../service/productService";
const asyncHandler = require("express-async-handler");

const getProductsHandler = asyncHandler(async (req: Request, res: Response) => {
  const products = await getProducts();
  res.status(200).json(products);
});

const getProductHandler = asyncHandler(async (req: Request, res: Response) => {
  const product = await getProductById(req.params.id);
  res.status(200).json(product);
});

const createProductHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const createdProduct = await createProduct(req.body);
    res.status(200).json(createdProduct);
  }
);

const deleteProductHandler = asyncHandler(
  async (req: Request, res: Response) => {
    await deleteProduct(req.params.id);
    res.status(200).json({
      message: `Product ${req.params.id} have been deleted`,
    });
  }
);

const updateProductHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await updateProduct(req.params.id, req.body);
    res.status(200).json(product);
  }
);

module.exports = {
  getProductsHandler,
  createProductHandler,
  getProductHandler,
  deleteProductHandler,
  updateProductHandler,
};
