var contagem = 0

function changeCount(num){
    contagem += num;
    document.getElementById("contagem").innerHTML = contagem;
}