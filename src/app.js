const path = require('path')
const bookSearch = require('./book.js')
const express = require("express")
const hbs = require("hbs")

const app = express()
const port = process.env.PORT || 3300

const dirViews = path.join(__dirname,'../template/views')
const dirPartials = path.join(__dirname,'../template/partials')
const dirPublic = path.join(__dirname,'../public')

app.set('views', dirViews)
app.set('view engine', 'hbs')
app.use(express.static(dirPublic))

app.get('',(req,res)=>{
    res.render('index')
})

app.get('/bookSearch',(req,res)=>{
    if(!req.query.keyword)
        return res.send('Please provide keyword!!!')
    bookSearch.books(req.query.keyword,(error,item)=>{
        if(error)
            return res.send({error})
        return res.send({
                item
            })
    })
})

//E2

app.listen(port,(error)=>{
    if(error)
        console.log(error)
    else
        console.log('Server is up on port '+port)
})