let amigos = [];

document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);

function adicionarAmigo(event) {
    event.preventDefault();  

    const input = document.querySelector("#amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";  
}

function atualizarLista() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `O amigo sorteado é: <strong>${nomeSorteado}</strong>`;
}