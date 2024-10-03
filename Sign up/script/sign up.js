function signup(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = {
        name: name,
        email: email,
        password: password,
    };

    const json = JSON.stringify(user);
    localStorage.setItem(email, json);
    console.log('User added');
}

function login(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    const user = localStorage.getItem(email);

    const data = JSON.parse(user);
    console.log(data);
    if (user === null) {
        result.innerHTML = 'Wrong email';
    } else if (email == data.email && password == data.password) {
        result.innerHTML = 'logged in';
    } else {
        result.innerHTML = 'wrong password';
    }
};
