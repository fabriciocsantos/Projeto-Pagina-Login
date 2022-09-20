
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

    if (dados1 && dados2 == "Admin"){
        alert('Entrou')
    }else {
        alert('Verifique o edital da empresa!')
    }
}