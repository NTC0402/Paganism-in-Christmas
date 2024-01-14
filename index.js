function getValue(){
    event.preventDefault();
    const Username = document.getElementById('Username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const password = document.getElementById('password').value;
    console.log(message, email, password, Username);
}
document.getElementById("btnSend").addEventListener("click", getValue);