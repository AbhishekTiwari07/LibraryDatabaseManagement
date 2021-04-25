const express = require('express')
const router = express.Router()
const user = require('../controller/user.js')
const check = require('../middleware/user.js')
const admin = require('../middleware/admin.js')
const borrow = require('../controller/borrow')

router.post("/", user.signUp)
router.post("/info", user.userInfo)
router.post("/request",check.auth , user.reqForBook)
router.patch("/return/:id", borrow.reqForReturn)
router.patch("/:id", admin , user.update)
router.patch("/info/:id", admin , user.updateUserInfo)
router.delete("/:id", admin , user.deleteUser)
router.delete("/info/:id", admin , user.deleteUserInfo)
router.get("/", check.auth, user.getIssued)
router.get("/info/:id", admin, user.getusers)
router.post("/login",user.login)

module.exports = router
