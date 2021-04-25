const cont = document.getElementById('cont')


const fun = ()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",`Bearer ${localStorage.getItem("token")}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/book/all/7/0", requestOptions)
        .then(response => response.text())
        .then(result => {
            result = JSON.parse(result)
            let str = `
                <div class="grid">
                    <div class="main">ISBN</div>
                    <div class="main">Title</div>
                    <div class="main">Edition</div>
                    <div class="main">Total Copies</div>
                    <div class="main">Remaining Copies</div>
                    <div class="main">Delete</div>
                </div>
            `
            result.map(obj => {
                str += `
                    <div class="grid">
                        <div class="main">${obj.isbn}</div>
                        <div class="main">${obj.title}</div>
                        <div class="main">${obj.edition}</div>
                        <div class="main">${obj.totalCopy}</div>
                        <div class="main">${obj.remCopy}</div>
                        <div class="main"><button onclick=fun2(${obj.isbn})>Delete</button></div>
                    </div>
                `
                cont.innerHTML = str
            })
        })
        .catch(error => console.log('error', error));
}

const fun2 = (isbn)=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization",`Bearer ${localStorage.getItem("token")}`);
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      
    url = "http://localhost:3000/book/"+isbn.toString()

      fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => {
          fun()
          alert(result.message)
      })
      .catch(error => console.log('error', error));
}

fun()