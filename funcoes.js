function somar() {
    var num1 = document.getElementById('valor1').value;
    var num2 = document.getElementById('valor2').value;
    
    if (num1 == "" && num2 == "") {
        window.alert("Nenhum valor informado");
    } else if (num1 == "") {
        window.alert("Valor 1 vazio");
    } else if (num2 == "") {
        window.alert("Valor 2 vazio");
    } else {
        var soma = parseFloat(num1) + parseFloat(num2);
        document.getElementById('resultado').innerHTML = "Resultado: " + soma;
    }
}

function limpar() {
    if (document.getElementById('valor1').value == "" && document.getElementById('valor2').value == "" 
    && document.getElementById('valor2').value == "") {
        window.alert("Todos os campos já estão vazios!");
    } else {
        document.getElementById('valor1').value = "";
        document.getElementById('valor2').value = "";
        document.getElementById('resultado').innerHTML = "";
    }
}

function esconderMostrar() {
    var menu = document.getElementById('borda').style.display;

    if (menu == "none") {
        document.getElementById('borda').style.display = "block";
    } else {
        document.getElementById('borda').style.display = "none";
    }
}