let saldo = 0;

function depositar() {
    const valor = parseFloat(prompt("Digite o valor a ser depositado:"));
    if (!isNaN(valor) && valor > 0) {
        saldo += valor;
        atualizarSaldo();
    } else {
        alert("Digite um valor válido para depósito.");
    }
}

function sacar() {
    const valor = parseFloat(prompt("Digite o valor a ser sacado:"));
    if (!isNaN(valor) && valor > 0 && valor <= saldo) {
        saldo -= valor;
        atualizarSaldo();
    } else {
        alert("Digite um valor válido para saque.");
    }
}

function atualizarSaldo() {
    document.getElementById("saldo").innerText = `Saldo: $${saldo.toFixed(2)}`;
}

function reproduzirSom() {
    const somAposta = document.getElementById("somAposta");
    somAposta.currentTime = 0;  // Reinicia o áudio para garantir que possa ser reproduzido várias vezes
    somAposta.play();
}

function apostar(escolha) {
    const valorApostado = parseFloat(document.getElementById("valorOperacao").value);
    if (isNaN(valorApostado) || valorApostado <= 0 || valorApostado > saldo) {
        alert("Digite um valor válido para a aposta.");
        return;
    }

    reproduzirSom();  // Chama a função para reproduzir o som

    const moeda = Math.random() < 0.5 ? "cara" : "coroa";
    document.getElementById("face").setAttribute("src", `${moeda}.png`);
    document.getElementById("face").classList.add("animate__animated", "animate__flipInY");

    setTimeout(() => {
        document.getElementById("face").classList.remove("animate__flipInY");
        const resultado = moeda === escolha ? "Ganhou!" : "Perdeu!";
        if (moeda === escolha) {
            saldo += valorApostado * 1.5;
        } else {
            saldo -= valorApostado;
        }
        atualizarSaldo();
        document.getElementById("result").innerText = `Resultado: ${resultado}`;
    }, 1000);
}
