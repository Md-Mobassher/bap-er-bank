document.getElementById('submit-button').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const yourEmail = emailField.value;
    console.log(yourEmail);

    const passField = document.getElementById('password');
    const yourPassword = passField.value;
    console.log(yourPassword);

    if (yourEmail == "sontan@bap.com" && yourPassword == "secret"){
        window.location.href="banking.html";
    }
})