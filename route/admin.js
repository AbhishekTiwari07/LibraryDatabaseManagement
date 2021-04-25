const express = require('express')
const router = express.Router()
const admin = require('../controller/admin')
const borrow = require('../controller/borrow')

router.post("/", admin.signUp)
router.post("/login", admin.login)
router.get("/info/:status",borrow.info)
router.post("/approv", borrow.approv)
router.delete("/rapprov/:id", borrow.rapprov)

module.exports = router