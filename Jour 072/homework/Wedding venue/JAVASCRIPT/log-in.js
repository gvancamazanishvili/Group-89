const users = JSON.parse(localStorage.getItem('RegisterUser'));

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    const exists = users.find((user) => user.email === email.value);
    if(!exists){
        alert('email not registered please try again');
        return;
    };
    const correct = users.find((user) => user.email === email.value && user.password === password.value);
    
    if(!correct){
        alert('email or password incorrect!');
        return;
    };
    localStorage.setItem('user', JSON.stringify(correct));

    e.target.reset();

    window.location.href = "profile.html"
});