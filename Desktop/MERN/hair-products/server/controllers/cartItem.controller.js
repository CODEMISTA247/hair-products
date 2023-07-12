const CartItem = require ('../models/cartItem');
const Product = require('../models/product'); 

module.exports = {
    addToCart: async (req, res) => {
    const { productId } = req.body;

    try {
    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    // create a new cart item
    const cartItem = new CartItem({
        productId: productId,
        quantity: 1,
        price: product.price,
    });

    // save the cart item to the database
    await cartItem.save();

    res.json({ message: 'Item added to the cart', cartItem });
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
    }
    },
};
