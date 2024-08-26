function criptografar() {
    const input = document.getElementById('inputText').value;
    const output = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').textContent = output;
}

function descriptografar() {
    const input = document.getElementById('inputText').value;
    const output = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').textContent = output;
}

function copiarTexto() {
    const outputText = document.getElementById('outputText').textContent;
    if (outputText) {
        navigator.clipboard.writeText(outputText)
            .then(() => alert("Texto copiado para a área de transferência!"))
            .catch(err => alert("Falha ao copiar texto: ", err));
    } else {
        alert("Nenhum texto para copiar!");
    }
}
