const adminForm = document.getElementById('adminRegForm')

const registration = (i)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(i);
    console.log(raw)
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    console.log(i)
    fetch("http://localhost:3000/admin", requestOptions)
    .then(response => {
        response.text()
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



adminForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    var id = document.getElementById('id').value
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    var cnfpass = document.getElementById('cnfpass').value
    var j = {
        id,
        name,
        email,
        password
    }
    registration(j)
})

