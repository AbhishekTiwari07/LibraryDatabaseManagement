const form = document.getElementById('form')
const val = document.getElementById('name')
const cont = document.querySelector('.cont')

const fun = (title)=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const url = "http://localhost:3000/search/"+encodeURI(title)
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            var res = JSON.parse(result)
            var re2 = []
            for(var i=0;i<6;i++){
                var obj = {
                    title: res.book[i].volumeInfo.title,
                    img : res.book[i].volumeInfo.imageLinks.thumbnail,
                    desc : res.book[i].volumeInfo.description
                }
                re2[i] = obj
            }
            console.log(re2)
            let str = ''
            re2.map(object => {
                str += `
                    <div class="grids">
                        <img src="${object.img}" alt="image">
                        <h1>${object.title}</h1>
                        <div class="hidden">
                            <p>&nbsp &nbsp &nbsp &nbsp
                                ${object.desc}
                            </p>
                        </div>
                    </div>
                `
            })
            cont.innerHTML = str
        })
        .catch(error => console.log('error', error));
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const title = val.value
    val.value=""
    fun(title)
    
})