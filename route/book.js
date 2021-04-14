const express = require('express')
const router = express.Router()
const book = require('../controller/book')
const authAdmin = require('../middleware/admin')

router.post("/", authAdmin, book.save)
router.get("/all/:limit/:offset", authAdmin, book.allBooks)
router.get("/:id", authAdmin, book.searchByISBN)
router.patch("/:id", authAdmin, book.update)
router.delete("/:id", authAdmin, book.deleteBook)
router.get("/by/:name", book.searchByName)

module.exports = router
