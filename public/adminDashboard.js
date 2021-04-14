const logout = document.getElementById('logout')

logout.addEventListener('click', () => {
    localStorage.removeItem("token")
    window.location.href = "./mainPage.html"
})