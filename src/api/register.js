const register =( username , email, password ) =>{
    fetch('http://localhost:4040/register',
    {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({username, email, password})
    })
    .then(res => res.text())
}

module.exports = register;