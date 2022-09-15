
/*------------/*
 Esqueci Senha 
/*------------*/

function esqueci () {
    window,alert('Verifique o edital da empresa!')
}

/*------------/*
 Tela de fundo 
/*------------*/

var hora = new Date().getHours();
if (6 <= hora && hora < 8) {
    document.body.style.backgroundColor = "#0033CC";

    }else if (8 <= hora && hora < 9) {

        document.body.style.backgroundColor = "#3366FF";

    }else if (9 <= hora && hora < 12) {

        document.body.style.backgroundColor = "#FFCC33";

    }else if (12 <= hora && hora < 15) {

        document.body.style.backgroundColor = "#FFBF00";
    }else if (15 <= hora && hora < 18) {

        document.body.style.backgroundColor = "#FF8A14";
    }else if (18 <= hora && hora < 20) {

        document.body.style.backgroundColor = "#000099";
    }else {
        document.body.style.backgroundColor = "#00004D";
    }