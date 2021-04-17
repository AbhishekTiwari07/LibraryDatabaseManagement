const logout = document.getElementById('logout')
const cont = document.getElementById('cont')
const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('twosome')

const info = (s)=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:3000/admin/info/${s}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            const arr = JSON.parse(result)
            console.log(arr)
            cont.innerHTML = ''
            let str = `
                <div class="grid">
                    <div class="main">ISBN</div>
                    <div class="main">User Id</div>
                    <div class="main">Issue Date</div>
                    <div class="main">Due Date</div>
                    <div class="main">Status</div>
                    <div class="main">Action</div>
                </div>
            `
            arr.map(value => {
                str += `
                <div class="grid">
                    <div class="value">${value.isbn}</div>
                    <div class="value">${value.userid}</div>
                    <div class="value">${value.issuedOn}</div>
                    <div class="value">${value.dueOn}</div>
                    <div class="value">${value.status}</div>
                    <div class="value"><button>${s}</button></div>
                </div>
                `
            })
            cont.innerHTML = str
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
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
});