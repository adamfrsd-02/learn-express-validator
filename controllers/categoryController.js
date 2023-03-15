const Categories = require('../models/categoryModel')

// get all categories
exports.findAll = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.status(200).json(categories);
    } catch (err) {
        res.status(err.status).json({
            message: err.message
        });
    }
}

// create a new category
exports.create = async (req, res) => {
    try {
        const category = await Categories.create(req.body);
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}

// remove a category
exports.remove = async (req, res) => {
    try {
        await Categories.remove(req.params.id);
        res.status(200).json({
            message: 'Category removed'
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}