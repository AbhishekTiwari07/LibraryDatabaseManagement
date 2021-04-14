const userForm = document.getElementById('userRegForm')

const uregistration = (i)=>{
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
    fetch("./user", requestOptions)
    .then(response => response.text())
    .then(result => {
        result = JSON.parse(result)
        if(result.message === "saved") 
            window.location.href = './userLogin.html'
        else 
            alert(result.message)
        console.log(result)
    })
    .catch(error => console.log('error', error));
}
userForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    var cnfpass = document.getElementById('cnfpass').value
    var j = {
        name,
        email,
        password
    }
    uregistration(j)
})
