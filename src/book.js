const request = require('request')
const log = console.log


const books = (keyword,callback)=>{
    const url = "https://www.googleapis.com/books/v1/volumes?q="+encodeURIComponent(keyword)+"&orderBy=relevance&key=AIzaSyB4FP4wp6h4oVGqPq5DzxOEllsGlBoGr1g"
    request({url:url,json:true},(error,response)=>{
        if(error)
            return callback(error,undefined)
        //E1
        let item = {
            item1 : response.body.items[0],
            item2 : response.body.items[1],
            item3 : response.body.items[2],
            item4 : response.body.items[3],
            item5 : response.body.items[4]
        }
        return callback(undefined,item)
    })
}

module.exports = {
    books,
}
