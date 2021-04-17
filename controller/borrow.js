const models = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const save = (req,res)=>{
    const borrow = {
        isbn: req.body.isbn,
        userid: req.token.id,
        status:0
    }
    models.Borrowlog.create(borrow).then(result=>{
        res.status(201).json({
            result
        })
    }).catch(error=>{
        res.json({
            error
        })
    })
}

const info = (req,res)=>{
    models.Borrowlog.findAll({
        where:{
            status : req.params.status
        }
    }).then(result=>res.json(result)).catch(error=>res.json(error))
}

const approv = (req,res)=>{
    const bookStatus = {
        isbn : req.body.isbn,
        userid: req.body.userid,
        issuedOn: req.body.issuedOn,
        dueOn:req.body.dueOn,
        status:1
    }
    models.Borrowlog.update(bookStatus,{
        where:{
            isbn:req.body.isbn
        }   
    }).then(result=>{
        res.status(200).json({
            message : "successfully updated"
        })
    }).catch(error=>{
        res.json({
            error
        })
    })
}

const rapprov = (req,res)=>{
    const isbn = req.params.isbn
    models.Borrowlog.destroy({
        where:{
            isbn
        }
    }).then(result=>{
        res.json({
            message : "Book Returned"
        })
    }).catch(error=>{
        res.json({
            message : "Something went wrong"
        })
    })
}

const reqForReturn = (req,res)=>{
    const book = {
        isbn : req.body.isbn,
        userid : req.body.id,
        issuedOn : req.body.issuedOn,
        dueOn : req.body.dueOn,
        status : 3
    }
    models.Borrowlog.update(book,{
        where:{
            isbn:req.params.isbn
        }
    }).then(req => res.status(201).json(req)).catch(err=>res.json(err))
}

module.exports = {
    save,
    approv,
    info,
    rapprov,
    reqForReturn
}