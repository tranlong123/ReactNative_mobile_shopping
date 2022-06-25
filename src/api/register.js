const register = (email, username, password) => {
    return fetch('http://localhost:3000/register',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, username, password })
        })
}
export default register;