const models = require('../models')
const Sequelize = require('sequelize');
const e = require('express');
const Op = Sequelize.Op;

const save = (req,res)=>{
    const borrow = {
        id : req.body.id,
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
            id : req.body.id
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
    const id = req.params.id
    models.Borrowlog.destroy({
        where:{
            id
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
        id : req.body.id,
        isbn : req.body.isbn,
        userid : req.body.userid,
        issuedOn : req.body.issuedOn,
        dueOn : req.body.dueOn,
        status : 2
    }
    models.Borrowlog.update(book,{
        where:{
            id:req.params.id
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