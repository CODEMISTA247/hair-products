const Product = require('..//models/product');

module.exports = {
    // Get all Products 
    allProducts : (req, res) => {
        Product.find()
            .then((allProducts) => {
                res.json(allProducts);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },

    // Add a New Product 
    addProduct: (req, res) =>{
        Product.create(req.body)
            .then((newProduct) => {
                res.json(newProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Filter Products by Category

    filterByCategory: (req, res) => {
        const category = req.params.category;
        Product.find({ category: category })
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate ( {_id: req.params.id }, req.body, {
            new: true, runValidators: true 
        })
        .then(updatedProduct => {
            res.json(updatedProduct)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    
}