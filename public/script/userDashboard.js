const logout = document.getElementById('logout')
const form = document.getElementById('searchByName')
const inputValue = document.getElementById('name')
const cont = document.querySelector('#cont')

logout.addEventListener('click', () => {
    localStorage.removeItem("token")
    window.location.href = "/"
})

const fun2 = (arr) => {
    if(arr) {
        console.log(arr)
        let str = ""
        arr.map(value => {
            str += `
            <div class="grids">
                <table>
                    <tr>
                        <td>Title:</td>
                        <td class="values">${value.title}</td>
                    </tr>
                    <tr>
                        <td>Available Copies:</td>
                        <td class="values">${value.remCopy}</td>
                    </tr>
                    <tr>
                        <td>ISBN:</td>
                        <td class="values">${value.isbn}</td>
                    </tr>
                    <tr>
                        <td>Edition:</td>
                        <td class="values">${value.edition}</td>
                    </tr>
                    <tr>
                        <td><button onclick="issue(${value.isbn})">Issue</button></td>
                    </tr>
                </table>
            </div>
            `
        })
        cont.innerHTML = str
    }
}

const issue = (isbn)=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        isbn
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

fetch("http://localhost:3000/borrow/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

const fun = (value)=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const url = "http://localhost:3000/book/by/"+encodeURI(value)

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let arr = JSON.parse(result)
            console.log(arr)
            fun2(arr)
        })
        .catch(error => console.log('error', error))
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const value = inputValue.value
    if(!value)
        fun2([])
    else
        fun(value)
})