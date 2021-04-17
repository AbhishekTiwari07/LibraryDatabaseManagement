const express = require('express')
const router = express.Router()
const borrow = require('../controller/borrow.js')
const check = require('../middleware/user.js')

router.post("/",check.auth ,borrow.save)

module.exports = router