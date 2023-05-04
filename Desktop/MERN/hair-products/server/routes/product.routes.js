const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/allProducts', ProductController.allProducts)
    app.post('/api/addProduct', ProductController.addProduct)
    app.get('/api/filterByCategory/:category', ProductController.filterByCategory)
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
    app.get('/api/filterByCategory/hair', (req, res) => {
        ProductController.filterByCategory(req,res, 'Hair');
    });
    app.get('/api/filterByCategory/skin', (req, res) => {
        ProductController.filterByCategory(req,res, 'Skin');
    });
    app.get('/api/filterByCategory/makeup', (req, res) => {
        ProductController.filterByCategory(req,res, 'Makeup');
    });
    app.get('/api/filterByCategory/facial', (req, res) => {
        ProductController.filterByCategory(req,res, 'Facial');
    });
}