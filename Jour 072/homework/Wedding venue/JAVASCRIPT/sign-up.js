const form = document.getElementById('form')

const users = JSON.parse(localStorage.getItem('RegisterUser')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        username: e.target.username.value, 
        email: e.target.email.value, 
        password: e.target.password2.value
        
    }
    const exists = users.find((user) => user.email === e.target.email.value);
    if(exists){
        alert('Email already registered!');
        return;
    };
    users.push(formData)
    
    localStorage.setItem('RegisterUser', JSON.stringify(users))
    window.location.href = "profile.html"
}) 