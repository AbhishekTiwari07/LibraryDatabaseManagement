const form = document.getElementById("form")
const cont = document.getElementById("cont")
const updForm = document.getElementById("updateForm")
var updateForm

const func = (id)=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const url = "http://localhost:3000/user/info/"+id.toString()

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            result = JSON.parse(result)
            console.log(result)
            if(result[0] == undefined)
                return alert("No user Found")
            let str
            result.map(obj => {
                str = `<div class="grid">
                <div class="main">User ID: ${obj.id}</div>
                <div class="main">User Name: ${obj.name}</div>
                <div class="main">Address: ${obj.street1+", "+obj.street2+", "+obj.city+" "}</div>
                <div class="main">Pincode: ${obj.pincode}</div>
                <div class="main">Phone Number: ${obj.phone}</div>
                <div class="main" id="upd"><button onclick="upd(${obj.id})">Update</button></div>
                <div class="main"><button onclick="del(${obj.id})">Delete</button></div>
            </div>
            `
            })
            cont.innerHTML = str
            
        })
        .catch(error => console.log('error', error));
}

const upd = (id)=>{
    console.log(id)
    updForm.innerHTML = `
        <form id="updForm">
            <input type="text" id="name" placeholder="Name">
            <input type="email" id="email" placeholder="Email">
            <input type="text" id="street1" placeholder="Street1">
            <input type="text" id="street2" placeholder="Street2">
            <input type="text" id="city" placeholder="City">
            <input type="text" id="pincode" placeholder="Pincode">
            <input type="text" id="phone" placeholder="Phone Number">
            <input type="submit" value="Submit">
        </form>
    `

    const area = document.getElementById('updForm')
    area.style.top = "49%"

    updateForm = document.getElementById("updForm")

    updateForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const street1 = document.getElementById('street1').value
        const street2 = document.getElementById('street2').value
        const pincode = document.getElementById('pincode').value
        const city = document.getElementById('city').value
        const phone = document.getElementById('phone').value

    const obj = {
        name, street1, street2, city, pincode, phone
    }
    const obj2 = {
        name, email 
    }

    updWithEmail(obj2,id)
    updWithoutEmail(obj,id)
    
    
    })
}

const updWithEmail = (obj,id)=> {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(obj);

    var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3000/user/"+id.toString(), requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const updWithoutEmail = (obj,id)=> {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(obj);

    var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3000/user/info/"+id.toString(), requestOptions)
    .then(response => response.text())
    .then(result => {
        alert("Information Updated")
        window.location.reload()
    })
    .catch(error => console.log('error', error));
}

const del = (id)=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };
    const url = "http://localhost:3000/user/info/"+id.toString()

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {          
            fetch("http://localhost:3000/user/"+id.toString(), requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    window.location.reload()
                    alert("User Deleted")
                })
                .catch(error => console.log('error', error));
        })
        .catch(error => console.log('error', error));
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = document.getElementById("id").value
    document.getElementById("id").value = ""
    func(name)
})