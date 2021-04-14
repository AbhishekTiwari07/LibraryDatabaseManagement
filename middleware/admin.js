const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token, "Kawaguchi")
        req.token = decodedToken
        next()
    }catch(e){
        return res.status(401).json({
            message : "Invalid token",
            error : e
        })
    }
}

module.exports = auth