const readline = require('readline');

// Criar interface para entrada de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter a string
function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

// Solicitar entrada do usuário
rl.question('Digite a string que deseja inverter: ', (input) => {
    const resultado = inverterString(input);
    console.log(`String original: ${input}`);
    console.log(`String invertida: ${resultado}`);
    rl.close();
});
