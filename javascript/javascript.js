
/*------------/*
 Esqueci Senha 
/*------------*/

function esqueci () {
    window.alert('Verifique o edital da empresa!')
}

/*------------/*
    Login
/*------------*/


function enviar(){

    var dados1 = document.getElementById("Log-Usuario_Admin").value;
    var dados2 = document.getElementById("Log-Senha_Admin").value;

    if (dados1 == "Admin" && dados2 == "Admin"){
        window.location.href = "file:///C:/Users/Fabr%C3%ADcio/OneDrive/Documentos/MeusProjetos/Projeto-Pagina-Empresa/index.html";
    }else {
        alert('Credenciais incorretas!')
    }
}