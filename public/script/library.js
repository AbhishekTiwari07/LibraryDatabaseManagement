const search = document.getElementById('search')
const issue = document.getElementById('issue') //this will send the request to the admin along with book's id

let arr = []
// this array contains the data fetched from the database in the form of objects

search.addEventListener('keyup', () => {
    console.log(search.value)
})

issue.addEventListener('click', () => {
    
})