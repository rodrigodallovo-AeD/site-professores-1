
const botaoFinal = document.getElementById("botao-final");
const mensagemFinal = document.getElementById("mensagem-final");

botaoFinal.addEventListener("click", function () {
    mensagemFinal.textContent =
        "Vocês sempre terão um lugar especial na minha história. Muito obrigado por tudo! 💙";

    botaoFinal.textContent = "Agradecimento registrado!";
    botaoFinal.disabled = true;
    botaoFinal.style.opacity = "0.8";
});
