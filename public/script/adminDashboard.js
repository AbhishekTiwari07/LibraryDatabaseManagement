const logout = document.getElementById('logout')
const cont = document.getElementById('cont')
const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('twosome')

var arr = []

const action = (id) => {
    const result = arr.filter(val => {
        if(val.id == id) return val
    })
    console.log(result)
    if(result[0].status == 0) {
        func(result[0])
    }
    else if(result[0].status == 2){
        func2(result[0])
    }
    else{
        alert("Easter Egg")
    }
}

const info = (s)=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:3000/admin/info/${s}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            arr = JSON.parse(result)
            console.log(arr)
            cont.innerHTML = ''
            let str = `
                <div class="grid">
                    <div class="main">Borrow ID</div>
                    <div class="main">ISBN</div>
                    <div class="main">User Id</div>
                    <div class="main">Issue Date</div>
                    <div class="main">Due Date</div>
                    <div class="main">Status</div>
                    <div class="main">Action</div>
                </div>
            `
            let val = ""
            if(s === 0) 
                val = "Approve"
            else if(s === 2) 
                val = "Return"
            arr.map(value => {
                str += `
                <div class="grid">
                    <div class="value">${value.id}</div>
                    <div class="value">${value.isbn}</div>
                    <div class="value">${value.userid}</div>
                    <div class="value">${value.issuedOn}</div>
                    <div class="value">${value.dueOn}</div>
                    <div class="value">${value.status}</div>
                    <div class="value"><button onclick="action(${value.id})">${val}</button></div>
                </div>
                `
            })
            cont.innerHTML = str
        })
        .catch(error => console.log('error', error));
}

const func = (obj)=>{

    var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/book/"+obj.isbn, requestOptions)
        .then(response => response.text())
        .then(result => {
            result = JSON.parse(result)
            console.log(result.remCopy)
            if(result.remCopy > 0){
                Date.prototype.addDays = function(days) {
                    var date = new Date(this.valueOf());
                    date.setDate(date.getDate() + days);
                    return date;
                }
                
                var today = new Date();
                var later = today.addDays(14)

                var myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
                myHeaders.append("Content-Type", "application/json");
                
                var raw = {
                        id : obj.id,
                        userid : obj.userid,
                        isbn : obj.isbn,
                        issuedOn : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                        dueOn : later.getFullYear()+'-'+(later.getMonth()+1)+'-'+(later.getDate()),
                        status : 1
                }

                raw = JSON.stringify(raw);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                    };

                fetch("http://localhost:3000/admin/approv", requestOptions)
                    .then(response => response.text())
                    .then(result2 => {
                        result2 = JSON.parse(result2)
                        if(result)
                            decrement(result)
                    })
                    .catch(error => console.log('error', error));
            }
            else
                alert("No Book Available")

        }).catch(error => console.log('error', error));

    console.log(obj) 
}

const decrement = (obj)=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");

    obj.remCopy = obj.remCopy-1

    var raw = JSON.stringify({
        "remCopy": obj.remCopy
    });

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/book/"+obj.isbn, requestOptions)
  .then(response => response.text())
  .then(result => {
        console.log(result)
        window.location.reload()
    })
  .catch(error => console.log('error', error));
}

const func2 = (obj)=>{

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/book/"+obj.isbn, requestOptions)
        .then(response => response.text())
        .then(result => {
            result = JSON.parse(result)
            if(result.remCopy < result.totalCopy){
                var myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

                var requestOptions = {
                    method: 'DELETE',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/admin/rapprov/"+obj.id.toString(), requestOptions)
                    .then(response => response.text())
                    .then(result2 => {
                        console.log(result2)
                        increment(result)
                    }).catch(error => console.log('error', error));
            }
            else
                console.log("GG")
        })
        .catch(error => console.log('error', error));    
}

const increment = (obj)=>{
    console.log(obj)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type", "application/json");

    obj.remCopy++

    var raw = JSON.stringify({
        "remCopy": obj.remCopy
    });

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/book/"+obj.isbn, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            window.location.reload()
        })
        .catch(error => console.log('error', error));
}

zero.addEventListener('click', ()=>{
    info(0)
})


one.addEventListener('click', () => {
    info(1)
})

two.addEventListener('click', () => {
    info(2)
})


logout.addEventListener('click', () => {
    localStorage.removeItem("token")
    window.location.href = "/"
})

//below is a garbage code for functionality of dropdown
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>'
});