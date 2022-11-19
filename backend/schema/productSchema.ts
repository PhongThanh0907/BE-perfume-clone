import {Schema} from 'mongoose'
import { ProductType } from '../types/productType';
export interface IProductSchema extends ProductType {
  _id: string;
}

const productSchema = new Schema<ProductType>(
  {
    nameProduct: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    volume: {
      type: String,
      require: true,
    },
    imageProduct: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    incense: {
      type: [String],
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default productSchema
