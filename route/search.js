const express = require('express')
const router = express.Router()
const search = require('../controller/search.js')

router.get("/:name",search)

module.exports = router