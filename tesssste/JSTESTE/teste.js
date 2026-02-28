
document.addEventListener("DOMContentLoaded", function () {

    const botaoContato = document.querySelector("#btn-contato");
    const mensagem = document.querySelector("#mensagem-js");

    if (!botaoContato || !mensagem) {
        console.log("Verifique os IDs no HTML.");
        return;
    }

    botaoContato.addEventListener("click", function (event) {

        event.preventDefault();

        mensagem.classList.toggle("hidden");

    });

});