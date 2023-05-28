const Product = require('../models/product');

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

    // OneProduct - For Details
    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id})
            .then((oneProduct) => {
                res.json(oneProduct)

            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Filter Products by Category

    filterByCategory: async (req, res) => {
        try {
            const category = req.params.category;
            const products = await Product.find({ category: category });
            console.log(await Product.find({ category: category })); // Console log to see if Products are being rerieved Correctly
            res.send(products);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Error retrieving products' });
        }
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