document.getElementById('inputLogin').addEventListener('click', event => {
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value
    fetch('http://localhost:3000/api/getUser', {
        method: 'GET', 
        headers: {
        'Content-Type': 'application/json', 
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => {
        const account = data.data.find(item => item.email === email)
        if (account && account.password === password)
            alert("Đăng nhập thành công", account.role)
        else 
            alert("Đăng nhập thất bại")
    })
    .catch(error => {
        console.error('Có lỗi xảy ra:', error)
    });
})