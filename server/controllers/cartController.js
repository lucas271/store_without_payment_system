const {addItem} = require('../modules/CartModule')

module.exports.addToCartController = async (req, res) => {
    try {
        const updatedUser = await addItem(req.body)
        res.send(updatedUser)
    } catch (error) {
        res.send({errors: 'server error'})   
    }
}

module.exports.removeFromCart = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}