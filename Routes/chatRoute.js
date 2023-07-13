const router = require('express').Router()
const chatController = require('../Controller/chatController.js')

router.route('/chat').get(chatController.renderChat)

module.exports=router;//export the variable 