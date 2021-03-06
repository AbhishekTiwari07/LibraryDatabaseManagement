const submit = document.getElementById('adminForm')

const verification = (obj)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(obj);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://localhost:3000/admin/login", requestOptions)
    .then(response => response.text())
    .then(result => {
        //save token in local storage
        result = JSON.parse(result)
        localStorage.setItem("token", result.token)
        console.log(localStorage.getItem("token"))
        if(result.message === "Email not found")
            alert("Email not Found")
        else if(result.message === "Password mismatch")
            alert("Password mismatch")
        else
            window.location.href = "./adminDashboard.html"
    })
    .catch(error => console.log('error', error)); 
}

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    const obj = {
        email,
        password
    }
    verification(obj)
})
