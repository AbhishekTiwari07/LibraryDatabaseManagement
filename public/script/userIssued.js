// const returnBook = document.getElementById('return')
// const status = document.getElementById('status')
const cont = document.querySelector('.cont1')
var results = []
const fun = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    fetch("http://localhost:3000/user/", requestOptions)
        .then(response => response.text())
        .then(result => {
            results = JSON.parse(result).result
            console.log(results)
            let str = ""
            results.map(obj => {
              str += `
                <div class="grids">
                  <table>
                      <tr>
                          <td>ISBN:</td>
                            <td class="values">${obj.isbn}</td>
                        </tr>
                        <tr>
                            <td>Due Date:</td>
                            <td class="values">${obj.dueOn}</td>
                        </tr>
                        <tr>
                            <td><button onclick="fun2(${obj.id})">Return</button></td>
                            <td class="pendSafe">Pending</td>
                        </tr>
                    </table>
                </div>
              `
              cont.innerHTML = str
            })
        })
        .catch(error => console.log('error', error));
}

const fun2 = (id) =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var obj 
    results.filter(val => {
      if(val.id == id) {
          obj = val
      }
    })

    console.log(obj)

    var raw = JSON.stringify({
        id:id,
        isbn : obj.isbn,
        userid : obj.userid,
        issuedOn : obj.issuedOn,
        dueOn : obj.dueOn
    }); 

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    url = "http://localhost:3000/user/return/"+obj.id
    fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

fun()