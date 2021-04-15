const form = document.querySelector('#suggestForm')

console.log(isbn)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const isbn = document.querySelector('#isbn input').value
    const title = document.querySelector('#title input').value
    const edition = document.querySelector('#edition input').value
    const totalCopy = document.querySelector('#totalCopy input').value
    const obj = {
        isbn, 
        title,
        edition,
        totalCopy,
        remCopy: totalCopy
    }

    fun(obj)
})

const fun = (obj) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");
    console.log(obj)
    var raw = JSON.stringify(obj);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3000/book", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}