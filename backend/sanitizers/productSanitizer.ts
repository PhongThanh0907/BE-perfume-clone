import { ProductType } from "../types/productType";
import HttpException from "../utils/httpException";

export const sanitizeProduct  = (product: ProductType): ProductType => {
    let sanitizedProduct = <ProductType>{};

    sanitizedProduct.nameProduct = sanitizeNameProduct(product.nameProduct)
    return sanitizedProduct
}

const sanitizeNameProduct = (nameProduct: string): string => {
    if(nameProduct === undefined) {
        throw new HttpException("Name Product is required", 400);
    }
    if(typeof nameProduct !== "string") {
        throw new HttpException("Name Product is not string", 400);
    }
    nameProduct = nameProduct.trim()
    if(nameProduct.length < 6) {
        throw new HttpException("Name Product must be at least 6 characters", 400)
    }
    if(nameProduct.length > 50) {
        throw new HttpException("Name Product must be less then 50 characters", 400);
        
    }
    return nameProduct;
}