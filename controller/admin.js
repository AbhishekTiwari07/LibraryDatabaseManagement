const models = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUp = (req,res)=> {

    models.Admin.findOne({
        where:{email:req.body.email}
    }).then(result=>{
        console.log(result)
        if(result != null)
            return res.status(409).json({
                message: "Email already exist"
            })
        else{
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(req.body.password,salt,(err,hash)=>{
                    const user = {
                        id: req.body.id,
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }
                    models.Admin.create(user).then(result=>{
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
                })
            })
        }
    })
}

const login = (req,res)=>{
    models.Admin.findOne({where:{email:req.body.email}}).then(user=>{
        if(user === null)
            return res.send({
                message : "Email not found"
            })
        bcrypt.compare(req.body.password, user.password, (err,result)=>{
            if(result){
                const token = jwt.sign({
                    email : user.email,
                    id: user.id
                },"Kawaguchi", (err,token)=>{
                    res.status(200).json({
                        message : "Authentication successful!",
                        token
                    })
                })
            }
            else
                return res.send({
                    message : "Password mismatch"
                })
        })
    })
}

module.exports = {
    signUp,
    login
}