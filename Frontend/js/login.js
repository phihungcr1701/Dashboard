document.getElementById('inputLogin').addEventListener('click', async () => {

    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    axios.get('http://localhost:3000/api/getUser', {})
    .then (response => {
        const data = response.data.data
        console.log(data)
        let kt = false
        data.forEach(item => {
            if (item.email == email && item.password == password){
                kt = true
                if (item.role == 'admin')
                    window.location.href = './index.html'
                else
                    window.location.href = './user.html'
            }
        })
    })
    .catch (error => {
        console.log(error)
    })
})