const Router = require('express').Router()
const {loginController, registerController} = require('./controllers/userAuthController')
const {addToCartController, removeFromCart} = require('./controllers/cartController')


Router.post('/login', loginController)
Router.post('/register', registerController)

Router.post('/addToCart', addToCartController)
Router.post('/removeFromCart', removeFromCart)

module.exports = Router