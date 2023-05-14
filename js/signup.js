const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', e=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserResgistered = Users.find(user => user.username === username)
    if(isUserResgistered){
        return alert('El usuario ya esta registrado')
    }

    Users.push({name: name, username: username, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'index.html'
})