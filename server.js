const http = require('http')
const app = require('./app.js')
const port = 3000

const server = http.createServer(app)

server.listen(port,(req,res)=>{
    console.log("App running at port "+port)
})

// sequelize model:generate --name Task --attributes title:string,userId:integer