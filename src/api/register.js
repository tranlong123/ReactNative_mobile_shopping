const register =( username , email, password ) =>{
    return fetch('http://localhost:3000/register',
    {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({username, email, password})
    })
}
export default register;