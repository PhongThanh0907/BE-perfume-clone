import { model } from "mongoose";
import productSchema, { IProductSchema } from "../schema/productSchema";

const ProductModel = model<IProductSchema>("Product", productSchema);

export default ProductModel;
