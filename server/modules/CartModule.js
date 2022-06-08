const mongoose = require('mongoose')
const userModel = mongoose.model('store')

module.exports.addItem = async (body) => {
    const cartInUserDB = (await userModel.findOne({email: body.email})).cart

    const itemsDifferent = cartInUserDB.filter(cart => cart.cloth.id !== body.cart.cloth.id)
    const itemInCart = cartInUserDB.find(cart => cart.cloth.id === body.cart.cloth.id)

    if(itemInCart){
        itemInCart.cloth.quantity = itemInCart.cloth.quantity ? itemInCart.cloth.quantity + 1 : 2
        itemsDifferent.push(itemInCart)
        const updatedCart = {cart: itemsDifferent}
        await userModel.updateOne({email: body.email}, updatedCart)
        return itemsDifferent   
    }

    itemsDifferent.push(body.cart) 

    await userModel.updateOne({email: body.email}, {cart: itemsDifferent})

    return itemsDifferent 
}
