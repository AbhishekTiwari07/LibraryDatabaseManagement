const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const save = (req,res)=> {
    const book = {
        isbn: req.body.isbn,
        title: req.body.title,
        edition: req.body.edition,
        totalCopy: req.body.totalCopy,
        remCopy: req.body.remCopy
    }
    models.Book.create(book).then(result=>{
        res.status(201).json({
            message: "Saved",
            result
        })
    }).catch(error=>{
        res.status(201).json({
            message: "Something went wrong",
            error
        })
    })
}

const searchByName= (req,res)=>{

    models.Book.findAll({
        where:{
            title : {
                [Op.like] : '%'+req.params.name+'%'
            }
        },
        limit:5
    }).then(result=>{
        res.status(200).json(result)
    }).catch(error=>{
        res.json(error)
    })
}

const searchByISBN = (req,res)=>{
    const id = req.params.id

    models.Book.findByPk(id).then(result=>res.status(200).json(result)
    ).catch(error=>res.json(error))
}

const update = (req,res)=>{
    const id = req.params.id
    const book = {
        title: req.body.title,
        edition: req.body.edition,
        totalCopy: req.body.totalCopy,
        remCopy: req.body.remCopy
    }

    models.Book.update(book,{
        where:{
            isbn:id
        }   
    }).then(result=>{
        res.status(200).json({
            message : "successfully updated",
            result: book
        })
    }).catch(error=>{
        res.json({
            error
        })
    })
}

const deleteBook = (req,res)=>{
    const id = req.params.id
    models.Book.destroy({
        where:{
            isbn:id
        }
    }).then(result=>{
        res.json({
            message : "Book deleted"
        })
    }).catch(error=>{
        res.json({
            message : "Domething went wrong"
        })
    })
}

const allBooks = (req,res)=>{
    models.Book.findAll({
        offset: parseInt(req.params.offset),
        limit: parseInt(req.params.limit)
    }).then(req => res.status(200).json(req)).catch(err=>res.json(err))
}

module.exports = {
    save,
    searchByISBN,
    update,
    deleteBook,
    searchByName,
    allBooks
}
