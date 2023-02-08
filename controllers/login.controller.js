var login = document.querySelector("[data-login]")



var users=[];
const http = new XMLHttpRequest();
http.open("GET", "https://sunstoreserver.onrender.com/users");

http.send();

http.onload = () => {
    users = JSON.parse(http.response);
}


function validarUsuario(username, pw) {

    var username = document.getElementById("email").value;
    var pw = document.getElementById("pw").value;

    users.forEach(user => {
        
        if (user.email==username && user.pw==pw) {
            window.location.href = "admin.html";
        }else{
            document.getElementById("mensajeError").innerHTML="Usuario o contraseña incorrecto";
        }
    });
   
}

function boton(){
    alert("boton");
}
login.onclick = validarUsuario;