const fetchInfo = (keyword)=>{
    fetch('/bookSearch?keyword='+keyword).then((res) => {
        res.json().then((data) => {
            if (data.error){
                console.log(data.error)
                //I1
                error.textContent = data.error
            }
            else {
                console.log(data.item.item1)
                content1.textContent = data.item.item1.volumeInfo.title
                content2.textContent = data.item.item2.volumeInfo.title
                content3.textContent = data.item.item3.volumeInfo.title
                content4.textContent = data.item.item4.volumeInfo.title
                content5.textContent = data.item.item5.volumeInfo.title
            }
        })
    })
}

const form = document.querySelector("form")
const input = document.querySelector("#bookName")
const error = document.querySelector("#error")
const book1 = document.querySelector("#content1")
const book2 = document.querySelector("#content2")
const book3 = document.querySelector("#content3")
const book4 = document.querySelector("#content4")
const book5 = document.querySelector("#content5")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const keyword = input.value
    input.value=""
    fetchInfo(keyword)
})