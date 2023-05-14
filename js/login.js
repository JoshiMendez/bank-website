const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', e=>{
    e.preventDefault()
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.username === username && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contrasena incorrectos')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'homepage.html'
})