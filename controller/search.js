const request = require('request');

const Gsearch = (req,res)=>{
    const book = req.params.name
    var options = {
        'method': 'GET',
        'url': 'https://www.googleapis.com/books/v1/volumes?q='+encodeURI(book)+'+intitle',
        'headers': {
        },
        'json':true
      }
      request(options,(err, response)=>{
        if (err) 
            return res.json({err})
        res.status(200).json({
            book : response.body.items
        })
      })
}

module.exports = Gsearch