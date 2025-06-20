import productModel from "../models/product.model.js";
import Category from "../models/productCategory.model.js";

export const getAllProducts = async (req,res)=>{
    
    console.log("Fetching all products");
    res.json({ message: "List of all products" });
}

export const getProductById = async (req, res) => {
    console.log("Fetching product by ID");
    res.json({ message: "Product details" });
}

export const createProduct = async (req, res) => {
        try {
            const {
            productName,
            productPrice,
            discountedPrice = 0,
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

            // 🧪 Basic validation
            if (!productName || productName.length < 3) {
            return res.status(400).json({ error: "Product name is too short." });
            }

            if (!productPrice || typeof productPrice !== "number") {
            return res.status(400).json({ error: "Product price must be a valid number." });
            }

            if (!category || !mongoose.Types.ObjectId.isValid(category)) {
            return res.status(400).json({ error: "A valid category ID is required." });
            }

            // 🧐 Check if category exists
            const existingCategory = await categoryModel.findById(category);
            if (!existingCategory) {
            return res.status(404).json({ error: "Category not found." });
            }

            // ✅ Create and save product
            const newProduct = await productModel.create({
            productName,
            productPrice,
            discountedPrice,
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
    console.log("Updating product");
    res.json({ message: "Product updated" });
}

export const deleteProduct = async (req, res) => {
    console.log("Deleting product");
    res.json({ message: "Product deleted" });
}

