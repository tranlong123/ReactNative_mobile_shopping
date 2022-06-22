const register =( username , email, password ) =>{
    fetch('http://localhost:3000/register',
    {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({username, email, password})
    })
    .then(res => res.text())
}

module.exports = register;