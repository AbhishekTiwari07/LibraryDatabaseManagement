const express = require('express')
const parser = require('body-parser')
const path = require('path')
const app = express()
const bookRoute = require('./route/book')
const userRoute = require('./route/user')
const searchBook = require('./route/search')
const adminRoute = require('./route/admin')
const borrowRoute = require('./route/borrow')
// const pages = require('./route/render')

app.use(parser.json())

const dirViews = path.join(__dirname,'/public/html')
const dirPublic = path.join(__dirname,'/public')
app.use(express.static(dirPublic))

app.get('/',function(req,res){
    res.sendFile(path.join(dirViews+'/mainPage.html'));
})
app.get('/adminLogin',function(req,res){
    res.sendFile(path.join(dirViews+'/adminLogin.html'));
})
app.get('/userLogin',function(req,res){
    res.sendFile(path.join(dirViews+'/userLogin.html'));
})
app.get('/userDashboard',function(req,res){
    res.sendFile(path.join(dirViews+'/userDashboard.html'));
})
app.get('/adminDashboard',function(req,res){
    res.sendFile(path.join(dirViews+'/adminDashboard.html'));
})
app.get('/adminRegistration',function(req,res){
    res.sendFile(path.join(dirViews+'/adminRegistration.html'));
})
app.get('/userRegistration',function(req,res){
    res.sendFile(path.join(dirViews+'/userRegistration.html'));
})
app.get('/addBook',function(req,res){
    res.sendFile(path.join(dirViews+'/suggest.html'));
})

app.use("/book", bookRoute)
app.use("/user", userRoute)
app.use("/search", searchBook)
app.use("/admin", adminRoute)
app.use("/borrow", borrowRoute)
// app.use("/",pages)

module.exports = app
