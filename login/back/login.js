function logar(){
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    
    console.log(JSON.stringify({
        email:email,
        senha:senha
    }));

    fetch("login",{
        method:'POST',
        body: JSON.stringify({
            email:email,
            senha:senha
        }),
        headers: {"content-type" : "application/json"}
    })

    .then(async(resp) => {
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado'){
            location.href = '/index/index.html'
        }else {
            alert('Usuário ou senha inválidos')
        }
    })
}