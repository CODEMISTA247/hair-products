const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/filterByCategory/:category', (req, res) => {
        ProductController.filterByCategory(req, res, req.params.category);
    });
    // Specific Category Routes 
    app.get('/api/filterByCategory/hair', (req, res) => {
        ProductController.filterByCategory(req,res, 'Hair');
    });
    app.get('/api/filterByCategory/makeup', (req, res) => {
        ProductController.filterByCategory(req,res, 'Makeup');
    });
    app.get('/api/filterByCategory/facial', (req, res) => {
        ProductController.filterByCategory(req,res, 'Facial');
    });

    app.get('/api/allProducts', ProductController.allProducts)
    app.post('/api/addProduct', ProductController.addProduct)
    app.get('/api/oneProduct/:id', 
    ProductController.getOneProduct)
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}

/*     app.get('/api/filterByCategory/:category', ProductController.filterByCategory) */
