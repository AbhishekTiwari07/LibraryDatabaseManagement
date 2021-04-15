const logout = document.getElementById('logout')
const form = document.getElementById('searchByName')
const inputValue = document.getElementById('name')
const cont = document.getElementById('container')

logout.addEventListener('click', () => {
    localStorage.removeItem("token")
    window.location.href = "./mainPage.html"
})

const fun2 = (arr) => {
    if(arr) {
        let str = ""
        arr.map(value => {
            str += `<div>${value.title}</div>`
        })
        cont.innerHTML = str
    }
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
        .catch(error => console.log('error', error));
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const value = inputValue.value
    if(!value)
        fun2([])
    else
        fun(value)
})