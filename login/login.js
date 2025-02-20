function validarLogin(){
    var email = document.getElementById("email").value;
    var email = document.getElementById("senha").value;
    
    var mensagemErro = document.getElementById("mensagemErro");

    if (email == "usuario@example.com" && senha == "senha123"){
        console.log("Login efetuado com sucesso!");
    }else{
        console.log("E-mail ou senha inválidos.");
        mensagemErro.style.display = "block";
        mensagemErro.textContent = "E-mail ou senha inválidos.";
    }
}