const userForm = document.getElementById('userRegForm')

const registration = (i)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const obj = {
        name : i.name,
        email : i.email
    }
    var raw = JSON.stringify(obj);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/user/info", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

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
    fetch("http://localhost:3000/user", requestOptions)
    .then(response => response.text())
    .then(result => {
        result = JSON.parse(result)
        registration(i)
        alert(result.message)
        if(result.message === "Saved")
            window.location.href = '../html/userLogin.html'
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
    if(password == cnfpass)
        uregistration(j)
    else    
        alert("Password Mismatch")

})
