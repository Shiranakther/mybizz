import Category from "../models/productCategory.model.js";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error("Error fetching category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const createCategory = async (req, res) => {
    try {
        const { categoryName, categoryImage,categoryImagePublicId, categoryDescription } = req.body;

        // Basic validation
        if (!categoryName || categoryName.length < 3) {
            return res.status(400).json({ error: "Category name is too short." });
        }

        // Create and save category
        const newCategory = await Category.create({
            categoryName,
            categoryImage,
            categoryImagePublicId,
            categoryDescription
        });

        return res.status(201).json({
            message: "Category created successfully!",
            category: newCategory,
        });

    } catch (err) {
        console.error("Category Creation Error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { categoryName, categoryImage,categoryImagePublicId,categoryDescription } = req.body;

        // Basic validation
        if (!categoryName || categoryName.length < 3) {
            return res.status(400).json({ error: "Category name is too short." });
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { categoryName, categoryImage,categoryImagePublicId, categoryDescription },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({
            message: "Category updated successfully!",
            category: updatedCategory,
        });

    } catch (err) {
        console.error("Category Update Error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully!" });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

