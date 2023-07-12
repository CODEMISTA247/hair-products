const cartItemController = require('../controllers/cartItem.controller');

// Define Routes for cart items
module.exports = (app) => {
    app.get('/api/getAllCartItems', cartItemController.getAllCartItems);
    app.post('/api/addToCart', cartItemController.addToCart);
};