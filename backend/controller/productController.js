import mongoose from "mongoose";
import productModel from "../models/product.model.js";
import Category from "../models/productCategory.model.js";

export const getAllProducts = async (req,res)=>{
    const products = await productModel.find();
    res.status(200).json(products);
}

export const getProductById = async (req, res) => {
    id = req.params.id;
    const product = await productModel.findById(req.params.id);
    if(!product){
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
    
}

export const createProduct = async (req, res) => {
        try {
            const {
            productName,
            productPrice,
            discountedPrice = 0,
            productIntroduction,
            productDescription,
            productImage = [],
            category,
            stock = 0,
            productColor = [],
            productSize = [],
            productBrand,
            tags = [],
            productRating = 0,
            productReviews = [],
            productAvailability = false,
            } = req.body;

            // Basic validation
            if (!productName || productName.length < 3) {
            return res.status(400).json({ error: "Product name is too short." });
            }

            if (!productPrice || typeof productPrice !== "number") {
            return res.status(400).json({ error: "Product price must be a valid number." });
            }

            if (!category || !mongoose.Types.ObjectId.isValid(category)) {
            return res.status(400).json({ error: "A valid category ID is required." });
            }

            // Check if category exists
            const existingCategory = await Category.findById(category);
            if (!existingCategory) {
            return res.status(404).json({ error: "Category not found." });
            }

            // Create and save product
            const newProduct = await productModel.create({
            productName,
            productPrice,
            discountedPrice,
            productIntroduction,
            productDescription,
            productImage,
            category,
            stock,
            productColor,
            productSize,
            productBrand,
            tags,
            productRating,
            productReviews,
            productAvailability,
            });

            return res.status(201).json({
            message: "Product created successfully!",
            product: newProduct,
            });

        } catch (err) {
            console.error("Product Creation Error:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
    
}

export const updateProduct = async (req, res) => {
   try {
    const productId = req.params.productId;
    const {
         productName,
         productPrice, 
         discountedPrice, 
         productIntroduction,
         productDescription, 
         productImage, 
         category, 
         stock
        , productColor, 
        productSize, 
        productBrand, 
        tags, 
        productRating, 
        productReviews, 
        productAvailability
        } = req.body;
        const product = await productModel.findById(productId);
    if (!product) {
    return res.status(404).json({ message: "Product not found" });
    }
    // Check if category exists
    const existingCategory = await Category.findById(category);
    if (!existingCategory) {
        return res.status(404).json({ error: "Category not found." });
        }
        // Update product
        const updatedProduct = await productModel.findByIdAndUpdate(productId, {
            productName,
            productPrice,
            discountedPrice,
            productIntroduction,
            productDescription,
            productImage,
            category,
            stock,
            productColor,
            productSize,
            productBrand,
            tags,
            productRating,
            productReviews,
            productAvailability
        }, { new: true });
        return res.status(200).json({
            message: "Product updated successfully!",
            product: updatedProduct,
        });
        } catch (err) {
            console.error("Product Update Error:", err);
            return res.status(500).json({ error: "Internal server error" });
            }
            
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

