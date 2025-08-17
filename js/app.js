let amigos = [];

function adicionar() {
    const amigoInput = document.getElementById('nome-amigo');
    const nome = amigoInput.value.trim();
    const lista = document.getElementById('lista-amigos');

    if (nome === '') {
        alert('Digite um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        amigoInput.value = '';
        return;
    }

    amigos.push(nome);

    lista.textContent = amigos.join(', ');
    amigoInput.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos quatro pessoas para sortear.');
        return;
    }

    embaralha(amigos);
    const sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const atual = amigos[i];
        const proximo = i === amigos.length - 1 ? amigos[0] : amigos[i + 1];
        sorteio.innerHTML += `${atual} ➡️ ${proximo}<br>`;
    }
}

function embaralha(lista) {
    for (let i = lista.length; i; i--) {
        const aleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[aleatorio]] = [lista[aleatorio], lista[i - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}
