const express = require('express')
const router = express.Router()
const user = require('../controller/user.js')
const check = require('../middleware/user.js')

router.post("/", user.signUp)
router.post("/request",check.auth , user.reqForBook)
router.patch("/:id",check.auth , user.update)
router.delete("/:id",check.auth , user.deleteUser)
router.post("/login",user.login)

module.exports = router
